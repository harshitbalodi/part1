import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({ good, neutral, bad, totalFeedbacks }) => {

    return totalFeedbacks === 0 ? (<>
        <p>No feedback given</p>
    </>)
        :
        (
            <div>
                <h1>Statistics</h1>
                <table>
                    <tbody>
                        <StatisticLine text="neutral" data={neutral} />
                        <StatisticLine text="bad" data={bad} />
                        <StatisticLine text="all" data={totalFeedbacks} />
                        <StatisticLine text="good" data={good} />
                        <StatisticLine text="average" data={(good - bad) / (totalFeedbacks)} />
                        <StatisticLine text="positive" data={(good * 100) / totalFeedbacks} > %</StatisticLine>
                    </tbody> 
                </table>

            </div>
        )

}

export default Statistics