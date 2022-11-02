export const cartVariants = {
    before: {
        x: '100vw',
       opacity: 0
    },
    after: {
        x: 0,
        opacity: 1
    },
    exit: {
        x: '100vw',
        opacity: 0
    },
    transition: {
        type: 'easeInOut',
        staggerChildren: 0.5
    }
}

export const cartItemVariants = {
    before: {
        x: '50vw'
    },
    after: {
        x: 0
    },
    exit: {
        x: '50vw'
    },
    transition: {
        type: 'ease'
    }
}