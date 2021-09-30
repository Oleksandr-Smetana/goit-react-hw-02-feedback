import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {Object.keys(options).map(item => (
        <button
          key={item}
          type="button"
          className="feedback"
          onClick={() => onLeaveFeedback(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
