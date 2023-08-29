// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-card-item">
      <button
        className="emoji-card-button"
        onClick={onClickEmojiCard}
        type="button"
      >
        <img src={emojiUrl} className="emoji-card-icon" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
