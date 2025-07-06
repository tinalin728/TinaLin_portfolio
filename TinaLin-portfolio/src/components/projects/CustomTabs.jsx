import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';


function CustomTabPanel({ children, value, index, isMobile, ...other }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`custom-tabpanel-${index}`}
            aria-labelledby={`custom-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: isMobile ? 2 : 4 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}


function a11yProps(index) {
    return {
        id: `custom-tab-${index}`,
        'aria-controls': `custom-tabpanel-${index}`,
    };
}

export default function CustomTabs({
    value,
    handleChange,
    tabData,
    mainColor,
    selectedTextColor,
}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ width: '100%' }}>
            <Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="custom tabs"
                    sx={{
                        '& .MuiTabs-flexContainer': {
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            width: 'auto',
                            gap: isMobile ? 0 : 1,
                        },
                        '& .MuiTab-root': {
                            fontFamily: 'inter, sans-serif',
                            fontSize: isMobile ? '14px' : '16px',
                            fontWeight: 'normal',
                            border: 1,
                            borderColor: mainColor,
                            borderRadius: isMobile ? '10px 10px 0 0' : '15px 15px 0 0',
                            textTransform: 'none',
                            bgcolor: 'white',
                        },
                        '& .Mui-selected': {
                            color: `${selectedTextColor} !important`,
                            fontWeight: 'medium',
                            bgcolor: mainColor,
                        },
                        '& .MuiTabs-indicator': {
                            display: 'none',
                        },
                    }}
                >
                    {tabData.map((tab, index) => (
                        <Tab label={tab.label} {...a11yProps(index)} key={index} />
                    ))}
                </Tabs>
            </Box>

            {
                tabData.map((tab, index) => (
                    <CustomTabPanel
                        value={value}
                        index={index}
                        key={index}
                        isMobile={isMobile}
                        className="border rounded-b-2xl rounded-r-2xl md:rounded-b-3xl md:rounded-r-3xl overflow-hidden p-0"
                        style={{
                            borderColor: mainColor,
                            backgroundColor: mainColor,
                        }}
                    >
                        <img
                            src={tab.image.src}
                            alt={tab.altText}
                            loading="lazy"
                            className="w-full shadow-lg"
                        />
                    </CustomTabPanel>

                ))
            }
        </Box >
    );
}
