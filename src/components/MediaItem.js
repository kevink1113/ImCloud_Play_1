import styled from "styled-components";
import PropTypes from "prop-types";

export const sizes = ["book", "music", "movie"];

export const mediaProps = {
  link: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(sizes),
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
};

const StyledMediaItem = styled.div`
  align-items: center;
  width: 289px;
  padding-bottom: 30px;
`;

const MediaItemImg = styled.img`
  padding: 30px;
  background: white;
  object-fit: cover;

  &.book {
    width: auto;
    height: auto;
  }
  &.music {
    width: 190px;
  }
  &.movie {
    width: auto;
    height: auto;
  }
`;

const MediaItemText = styled.div`
  margin: 0 auto;
  padding: 0 0;
  text-align: initial;
  p {
    width: 80%;
    margin: 0 auto;
    font-size: 0.7rem;
  }

  .ItemTitle {
    text-align: center;
    font-weight: 400;
    padding: 10px 0;
  }
`;

const MediaItem = ({ link, src, size, title, text }) => {
  return (
    <StyledMediaItem>
      <a href={link} target="blank">
        <MediaItemImg src={src} className={size}></MediaItemImg>
      </a>

      <MediaItemText>
        <div className="ItemTitle">{title}</div>
        <p>{text}</p>
      </MediaItemText>
    </StyledMediaItem>
  );
};

MediaItem.defaultProps = {
  text:
    "Lorem ipsum dolor sit amet, ctetur adipiscing elit. Pellentesquenec leo neque. Pellentesque sed est mattis",
};
MediaItem.propTypes = mediaProps;

export default MediaItem;
