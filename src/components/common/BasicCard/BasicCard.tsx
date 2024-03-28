import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ReactNode } from "react";
import { cardStyles } from "./styles";
const BasicCard = ({ header, content }: BasicCardProps) => {
  return (
    <Card sx={cardStyles}>
      {header}
      <CardContent>{content}</CardContent>
    </Card>
  );
};

interface BasicCardProps {
  header?: ReactNode;
  content: ReactNode;
}

export default BasicCard;
