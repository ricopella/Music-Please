/**
 * Function used to replace the default width & height string with defined values
 *
 * example:
 * input: www.twitch.tv/box-art-{width}x{height}.jpg width = 72 height = 48
 * output: www.twitch.tv/box-art-72x48.jpg
 * @param {string} [str='']
 * @param {number} [width=0]
 * @param {number} [height=0]
 * @returns {string}
 */
const setTwitchImageSize = (
        str = '',
        width = 0,
        height = 0,
    ) =>
    typeof str === 'string' ?
    str.replace(/(%{width}x%{height})/, `${width}x${height}`) :
    '';

export default setTwitchImageSize