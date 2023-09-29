import PropTypes from 'prop-types';
import QRImageDefault from '../assets/image-qr-code.png';

const QRImage = ({ src }) => (
  <img src={src} className="rounded-xl w-[288px] h-[288px] text-center select-none" alt="QR Code" />
);

QRImage.propTypes = {
  src: PropTypes.string.isRequired,
};

const CardText = ({ title, description }) => (
  <div className="flex flex-col p-[8px]">
    <h1 className="font-bold text-[22px] text-center text-light-dark-blue my-[16px] leading-[120%]">
      {title}
    </h1>
    <span className="text-[15px] text-center text-light-blue-gray">
      {description}
    </span>
  </div>
);

CardText.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const QRCard = ({ QR = QRImageDefault, title, description, className }) => (
  <div className={`flex flex-col bg-white rounded-[20px] p-[16px] w-[320px] h-[497px] my-[152px] mx-auto ${className}`}>
    <QRImage src={QR} />
    <CardText title={title} description={description} />
  </div>
);

QRCard.propTypes = {
  QR: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};

QRCard.defaultProps = {
  QR: QRImageDefault,
  title: 'Default Title',
  description: 'Default Description',
  className: '',
};

export default QRCard;
