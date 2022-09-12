import moment from 'moment'
import Box from '@mui/material/Box';

import { NavLink } from 'react-router-dom'


//自動化できなかったので、年が変わるときに変える(このファイルのみ)　
const japanHoilday2022 = {
    "2022-01-01": "元日",
    "2022-01-10": "成人の日",
    "2022-02-11": "建国記念の日",
    "2022-02-23": "天皇誕生日",
    "2022-03-21": "春分の日",
    "2022-04-29": "昭和の日",
    "2022-05-03": "憲法記念日",
    "2022-05-04": "みどりの日",
    "2022-05-05": "こどもの日",
    "2022-07-18": "海の日",
    "2022-08-11": "山の日",
    "2022-09-19": "敬老の日",
    "2022-09-23": "秋分の日",
    "2022-10-10": "スポーツの日",
    "2022-11-03": "文化の日",
    "2022-11-23": "勤労感謝の日"
}



function Calendar(props){
    
    const startDate = moment([props.year, props.month, 1]) //月の最初の日付を取得
    const endDate = Number(props.month) === 11 ? moment([props.year, 11, 31]) : moment([props.year, props.month+1, 1]).subtract(1, 'days') //月の最後の日付を取得
    const lastMonthEndDate = startDate.clone().subtract(1, 'days') //前の月の最後の日付を取得
    const nextMonthStartDate = endDate.clone().add(1, 'days')
    const calendar = [];
    
    

    const lastMonthCount = Number(startDate.format('d'))
    for (let i = 0; i < lastMonthCount; i++){
        calendar.unshift(
            <Box 
                sx={{ aspectRatio: '1 / 1', border: '1px solid #000', fontSize: "30px", color: "#828583"}} 
                key={lastMonthEndDate.format('MD')}
            >
                {lastMonthEndDate.format('D')}
            </Box>
        )
        lastMonthEndDate.subtract(1, 'days')
    }
   

    while(startDate.unix() <= endDate.unix()) {
        if (startDate.format('YYYY-MM-DD') in japanHoilday2022){
            calendar.push(
                <NavLink 
                    to={`/${startDate.format('YYYYMMDD')}`}
                    style={{ textDecoration: 'none'}}
                    key={startDate.format('MD')}
                >
                    <Box 
                        sx={{ aspectRatio: '1 / 1',  border: '1px solid #000', fontSize: "30px", color: '#f00'}} 
                        id={startDate.format('YYYYMMDD')}
                    >
                        {startDate.format('D')}
                        <p style={{fontSize: "10px"}}>{japanHoilday2022[startDate.format('YYYY-MM-DD')]}</p>
                    </Box>
                </NavLink>
            )
        } else {
            calendar.push(
                <NavLink 
                    to={`/${startDate.format('YYYYMMDD')}`}
                    style={{ textDecoration: 'none', color: '#000'}}
                    key={startDate.format('MD')}
                >
                    <Box 
                        sx={{ aspectRatio: '1 / 1',  border: '1px solid #000', fontSize: "30px", }} 
                        id={startDate.format('YYYYMMDD')}
                    >
                        {startDate.format('D')}
                        {/*<div className='circle'></div>*/}
                    </Box>
                </NavLink>
            )
        }
        startDate.add(1, 'days');
    }

    

    const nextMonthCount = 6 - Number(endDate.format('d'))
    for (let i = 0; i < nextMonthCount; i++){
        calendar.push(
            <Box sx={{ aspectRatio: '1 / 1', border: '1px solid #000', fontSize: "30px", color: "#828583", backgroundColor: ""}} 
                key={nextMonthStartDate.format('MD')}
            >
                {nextMonthStartDate.format('D')}
            </Box>
        )
        nextMonthStartDate.add(1, 'days')
    }
    
    return (
        <>
            <Box sx={{
                width: '100%',
                textAlign: 'center',
                fontSize: '50px',
                fontWeight: '500',
                margin: 'auto',
            }}>{endDate.format('YYYY年 MM月 ')}{endDate.format('MMMM').slice(0,3)}</Box>
            <Box sx={{
                width: '60%',
                display: 'grid',
                gridAutoFlow: 'row',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: 0,
                border: '1px solid #000',
                margin: 'auto',
            }}>
                <Box sx={{ textAlign: 'center', color: '#f00', border: '1px solid #000', }}>日</Box>
                <Box sx={{ textAlign: 'center', border: '1px solid #000', }}>月</Box>
                <Box sx={{ textAlign: 'center', border: '1px solid #000',}}>火</Box>
                <Box sx={{ textAlign: 'center', border: '1px solid #000',}}>水</Box>
                <Box sx={{ textAlign: 'center', border: '1px solid #000',}}>木</Box>
                <Box sx={{ textAlign: 'center', border: '1px solid #000',}}>金</Box>
                <Box sx={{ textAlign: 'center', color: '#00f' , border: '1px solid #000',}}>土</Box>
                {calendar}
            </Box>
            
        </>
    )   
}

export default Calendar;