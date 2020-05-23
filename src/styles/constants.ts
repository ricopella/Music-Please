export const MEDIA_BREAKPOINTS = {
    PHONE: `25.875rem`,
    SMALL_DESKTOP: `68.75rem`,
    TABLET: `48rem`,
}

export const COLORS = {
    NEON_GREEN: `#39ff14`
}

export const SLIDE_IN_ANIMATION_OPTIONS = {
    animate: 'visible',
    exit: 'exit',
    initial: 'hidden',
    variants: {
        exit: {
            opacity: 0,
            y: 30,
        },
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    },
}

export const FADE_IN_ANIMATION_OPTIONS = {
    animate: 'visible',
    exit: 'exit',
    initial: 'hidden',
    transition: {
        duration: 0.25,
    },
    variants: {
        exit: {
            opacity: 0,
        },
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
    },
};