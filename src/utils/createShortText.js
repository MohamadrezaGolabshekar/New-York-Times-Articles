
export const createShortText = (text = '', maxCount) => {
    return text.length < maxCount ? text : `${text.substr(0, maxCount)}...`;
}