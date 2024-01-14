import React from 'react';
import {Image, ImageProps} from "@chakra-ui/react";

import BullsEye from '../assets/bulls-eye.webp';
import ThumbsUp from '../assets/thumbs-up.webp';
import Meh from '../assets/meh.webp';
const Emoji: React.FC<{ rating: number }> = ({rating}) => {
    const emojiMap: { [key: number]: ImageProps } = {
        3: {src: Meh, alt: 'Meh', boxSize: '25px'},
        4: {src: ThumbsUp, alt: 'Recommended', boxSize: '25px'},
        5: {src: BullsEye, alt: 'Exceptional', boxSize: '35px'}
    }
    return (
        <Image { ...emojiMap[rating]} marginTop={2} />
    );
};

export default Emoji;