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
    subtitle: string;
};

const DataCard = ({ title, data, subtitle }: DataCardProps) => {
    return (
        <Card className="w-full content-center justify-center text-center">
            <CardHeader className="pb-1">
                <CardDescription >{title}</CardDescription>
                <CardTitle className="text-xl lg:text-4xl">${data}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-muted-foreground text-xs">{subtitle}</div>
            </CardContent>
        </Card>
    );
};

export default DataCard;
