import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../../ui/card';

type DataCardProps = {
    title: string;
    data: string;
    date: string;
};

const DataCard = ({ title, data, date }: DataCardProps) => {
    return (
        <Card className="w-1/3 content-center justify-center text-center">
            <CardHeader className="pb-1">
                <CardDescription>{title}</CardDescription>
                <CardTitle className="text-4xl">${data}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-muted-foreground text-xs">{date}</div>
            </CardContent>
        </Card>
    );
};

export default DataCard;
