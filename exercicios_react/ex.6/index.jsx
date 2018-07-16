import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Lins'>
        <Member name='Matheus' />
        <Member name='Moises' />
        <Member name='Ariovaldo' />
    </Family>
    ,document.getElementById('app')
)