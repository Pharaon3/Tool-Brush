// Material-UI
import { Container, Grid, Typography } from '@mui/material';

// Types
import { RecommendationProps } from 'types/recommendation';
import { IRecommendBrush } from 'types/wireframe';

// Third Party
import { FormattedMessage } from 'react-intl';

// =============================|| INSTRUCTION ||============================= //

const Recommendations = ({ recommend_brush }: RecommendationProps) => {
  const imgPath = require.context('assets/images/items/categories', true);

  const displayDescription = (brush_data: IRecommendBrush | null) => {
    if (!brush_data) return '';
    if (!brush_data.description) return '';
    const { name, size } = brush_data;

    return (
      <>
        {!name ? (
          <FormattedMessage id="size" />
        ) : (
          <FormattedMessage id="brush" />
        )}
        {` ${size}`}
        {!name ? '' : 'mm'}
        {` ${name}`}
      </>
    );
  };

  return (
    <Container className="rec-container">
      <Grid container spacing={2} sx={{ flexWrap: 'nowrap' }}>
        <Grid item xs={2}>
          <img
            src={imgPath(`./${recommend_brush?.cat_img}`).default}
            srcSet={imgPath(`./${recommend_brush?.cat_img}`).default}
            alt="unloaded asset"
          />
        </Grid>
        <Grid item xs={10} className="content">
          <Typography variant="h4">{recommend_brush?.title} </Typography>
          {recommend_brush.items.map((item, index) => (
            <Typography variant="h6" key={index}>
              {displayDescription(item)}
            </Typography>
          ))}
          {}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Recommendations;
