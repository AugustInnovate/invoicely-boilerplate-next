import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import UsersIcon from '../icons/UserIcon'

const AnalyticsCard = ({title, number, description}:any) => {
    return (
        <Card className="w-full h-[130px] md:w-[280px] gap-2">
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <UsersIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{number}</div>
                <p className="text-xs text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    )
}

export default AnalyticsCard
