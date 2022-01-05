export const FLAGS = {
    
    GROUPS: {
        CAT_ETHICS          : 2**0,
        CAT_STATE_CRITICS   : 2**1,
        CAT_ECONOMICS       : 2**2,
        MANDATORY           : 2**3,
        CROSS_THREAD        : 2**4
    },

    AUTHORS: {
        ATOM_IS_NAME    : 0,
        ATOM_IS_PREFIX  : 2**1,
        ATOM_IS_MIDFIX  : 2**2, /* https://en.wikipedia.org/wiki/Nobiliary_particle */
        ATOM_IS_POSTFIX : 2**3
    }
}

export const ATOMS = {
    ATOM_IS_NAME                : 0,
    ATOM_IS_PREFIX              : 1,
    ATOM_IS_MIDFIX              : 2, /* https://en.wikipedia.org/wiki/Nobiliary_particle */
    ATOM_IS_POSTFIX             : 3,
    ATOM_IS_HYPHEN              : 4,
    ATOM_IS_SPANISH_PRIMARY     : 5, /* https://en.wikipedia.org/wiki/Spanish_naming_customs */
    ATOM_IS_SPANISH_SECONDARY   : 6,
    ATOM_IS_ORG                 : 7
}

