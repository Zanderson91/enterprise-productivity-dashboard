import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import Grid from '@mui/material/Grid';
import './calendar.css'


    const minDate = new Date('2020-01-01T00:00:00.000');
    const maxDate = new Date('2034-01-01T00:00:00.000');

    export function SubComponentsPickers() {
        const [date, setDate] = React.useState(new Date());

        return (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid container spacing={1} className="gridContain">
                    <Grid item xs={0} md={0}>
                        <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
                    </Grid>
                </Grid>
            </LocalizationProvider>
        );
    }
