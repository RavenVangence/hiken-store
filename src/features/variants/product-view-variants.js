 export const  productViewVariants = {
    before: {
        x: '-100vw',
        opacity: 0
    },
    after: {
        x: 0,
        opacity: 1
    },
    exit: {
        x: '-100vw',
        opacity: 0
    },
    transition: {
        type: 'easeInOut'
    }
}

export const itemVariants = {
    before: {
        scale: 0,
        opacity: 0
    },
    after: {
        scale: 1,
        opacity: 1
    },
    exit: {
        scale: 0,
        opacity: 0
    },
    transition: {
        type: 'easeIn'
    }
}

export const productViewModalVariants = {
    before: {
        y: '1rem',
        scale: 0
    }, 
    after: {
        y: -10,
        scale: 1
    },
    exit: {
        y: '2rem',
        scale: 0
    },
    transition: {
        type: 'easeIn'
    }
}
