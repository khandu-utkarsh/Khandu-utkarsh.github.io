import { Typography, Box} from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

export interface WCardProps {
    cardHeading: string;
    introContent: string;
    linkToArticle?: string;
    keywords? :string[];
    sx? : any;

}


export default function BasicCard({cardHeading, introContent, linkToArticle, keywords, sx} : WCardProps) {


    const KeywordChips = (
        <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1} sx={{ paddingTop: 2, paddingBottom: 2, paddingLeft: 2, paddingRight: 2}}>
          {keywords?.map((keyword, index) => (
            <Chip key={index} label={keyword} />
          ))}
        </Stack>
      );


    return (
        <Box sx={sx}>
            <Card sx={{}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {cardHeading}
                </Typography>
                {KeywordChips}
                <Typography variant="body2">
                    {introContent}
                </Typography>
            </CardContent>
        <Divider />

      <CardActions>
        <Button size="small" href={linkToArticle || "/"} target="_blank">Read More</Button>
      </CardActions>

    </Card>
    </Box>
  );
}