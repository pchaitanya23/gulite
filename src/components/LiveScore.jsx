import React from 'react'
import css from './LiveScore.module.css'
import Navbar from './Navbar.jsx'
export default function betting() {
    return (
        <>
            <Navbar/>
            <div className={css.liveScore}>
                <p>1st Match-Team A vs Team B</p>
                <div className={css.teamScore}>
                    <span><img src="" alt="" /></span>
                    <span>Team A</span>
                    <span className={css.score}>155-2</span>
                </div>
                <div className={css.teamScore}>
                    <span><img src="" alt="" /></span>
                    <span>Team B</span>
                    <span className={css.score}>155-2</span>
                </div>
            </div>
            <table className={css.table}>
                <tr>
                    <th>Batsman</th>
                    <th>R</th>
                    <th>B</th>
                    <th>4's</th>
                    <th>6's</th>
                    <th>SR</th>
                </tr>
                <tr>
                    <td>Ganesh</td>
                    <td>40</td>
                    <td>20</td>
                    <td>4</td>
                    <td>0</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>Chomco</td>
                    <td>40</td>
                    <td>20</td>
                    <td>4</td>
                    <td>0</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>Saran</td>
                    <td>40</td>
                    <td>20</td>
                    <td>4</td>
                    <td>0</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>Avinash</td>
                    <td>40</td>
                    <td>20</td>
                    <td>4</td>
                    <td>0</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>Sathwik</td>
                    <td>40</td>
                    <td>20</td>
                    <td>4</td>
                    <td>0</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>Macha</td>
                    <td>40</td>
                    <td>20</td>
                    <td>4</td>
                    <td>0</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>Chaitanya</td>
                    <td>40</td>
                    <td>20</td>
                    <td>4</td>
                    <td>0</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>Kalyan</td>
                    <td>40</td>
                    <td>20</td>
                    <td>4</td>
                    <td>0</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>Tantra</td>
                    <td>40</td>
                    <td>20</td>
                    <td>4</td>
                    <td>0</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>Santosh</td>
                    <td>40</td>
                    <td>20</td>
                    <td>4</td>
                    <td>0</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>Karthikeya</td>
                    <td>40</td>
                    <td>20</td>
                    <td>4</td>
                    <td>0</td>
                    <td>200</td>
                </tr>
                <tr>
                    <th>Rohit</th>
                    <th>O</th>
                    <th>M</th>
                    <th>R</th>
                    <th>W</th>
                    <th>Eco</th>
                </tr>
                <tr>
                    <td>Pulihora(sriram)</td>
                    <td>6</td>
                    <td>0</td>
                    <td>37</td>
                    <td>0</td>
                    <td>6.17</td>
                </tr>
                <tr>
                    <td>Sean Abbott</td>
                    <td>6</td>
                    <td>0</td>
                    <td>37</td>
                    <td>0</td>
                    <td>6.17</td>
                </tr>
                <tr>
                    <td>AnnaPoona</td>
                    <td>6</td>
                    <td>0</td>
                    <td>37</td>
                    <td>0</td>
                    <td>6.17</td>
                </tr>
                <tr>
                    <td>Sanju</td>
                    <td>6</td>
                    <td>0</td>
                    <td>37</td>
                    <td>0</td>
                    <td>6.17</td>
                </tr>
                <tr>
                    <td>Abhinay</td>
                    <td>6</td>
                    <td>0</td>
                    <td>37</td>
                    <td>0</td>
                    <td>6.17</td>
                </tr>
            </table>
        </>
    )
}
