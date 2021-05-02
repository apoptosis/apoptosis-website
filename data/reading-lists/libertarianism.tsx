import { BOOKS } from "./books";
import { FLAGS } from "../data";

export const levels: readonly string[] = ["Novice","Beginner","Proficient"]

export let cats: Array<string> = []
cats[FLAGS.GROUPS.CAT_ETHICS]           = "Ethics & Law"
cats[FLAGS.GROUPS.CAT_STATE_CRITICS]    = "Statism Critics"
cats[FLAGS.GROUPS.CAT_ECONOMICS]        = "Economics"

export const vis = {
    "category-width": 500,
    "category-input-y": 25
}

/*{
    "CAT_ETHICS": {
        title: "Ethics & Law"
    },
    "CAT_STATE_CRITICS": {
        title: "Statism Critics"
    },
    "CAT_ECONOMICS": {
        title: "Economics"
    }
}*/

/*
 * Group structure
 * [
 *   flag_int,
 *
 *   // book arr
 *   [
 *      // some book
 *      [
 *        [BOOKS["some book"], BOOKS["subsequent book"]],
 * 
 *        // child group
 *        [...]
 *      ],
 *      ...
 *   ],
 *
 *   // child group
 *   [...]
 * ]
 */

let rl = []
rl[FLAGS.GROUPS.CAT_ETHICS] = [
    // thread 0
    [
        // group 0
        [
            // flags for group 0
            FLAGS.GROUPS.CAT_ETHICS,
                
            // books in group 0
            [
                [
                    [BOOKS["against-the-state"]]
                ],
                [
                    [BOOKS["spontaneous-order"]]
                ],
                [
                    [BOOKS["libertarian-anarchy"]]
                ]
            ],

            // group 0s children
            [
                // group 0 child 0
                [
                    FLAGS.GROUPS.CAT_ETHICS,
                        
                    // books in group 0 child 0
                    [
                        [
                            [BOOKS["the-ethics-of-liberty"]],

                            // with a child
                            [
                                FLAGS.GROUPS.CAT_ETHICS | FLAGS.GROUPS.MANDATORY,
                                [
                                    [BOOKS["the-economics-and-ethics-of-private-property"]]
                                ]
                            ]
                        ],
                        [
                            [BOOKS["the-machinery-of-freedom"]]
                        ],
                        [
                            [BOOKS["the-market-for-liberty"]]
                        ]
                    ],

                    // group 0 child 0 children
                    [
                        // group 0 child 0 child 0
                        [
                            FLAGS.GROUPS.CAT_ETHICS,
                            [
                                [
                                    [BOOKS["liberty-games-and-contracts"],BOOKS["the-enterprise-of-law"]]
                                ],
                                [
                                    [BOOKS["chaos-theory"],BOOKS["anarchy-and-the-law"]]
                                ]
                            ],
                            
                            // children
                            [
                                [
                                    FLAGS.GROUPS.CAT_ETHICS | FLAGS.GROUPS.MANDATORY,
                                    [
                                        [
                                            [BOOKS["the-privatization-of-roads-and-highways"]],
                                            [BOOKS["against-intellectual-property"]]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]
]

rl[FLAGS.GROUPS.CAT_ETHICS | FLAGS.GROUPS.CAT_STATE_CRITICS] = [
    [
        [
            0,
            [
                [
                    [BOOKS["no-treason"]]
                ]
            ],
            [
                FLAGS.GROUPS.CROSS_THREAD,
                [
                    [BOOKS["the-problem-of-political-authority"]]
                ],
                [
                    // cross thread children
                    ["liberty-games-and-contracts", "chaos-theory"] // where it connects to
                ]
            ]
        ]
    ]
]

const libert_reading_list = rl
rl = null
export default libert_reading_list
