export const generateRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 101); // 0-100%
    const lightness = Math.floor(Math.random() * 101); // 0-100%

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

export const generateRandomColorArray = () => {
    const colorArray = [];

    for (let i = 0; i < 12; i++) {
        colorArray.push(generateRandomColor());
    }

    return colorArray;
};

