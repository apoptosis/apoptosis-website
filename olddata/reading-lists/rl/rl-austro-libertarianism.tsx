import { BOOKS } from "../books";
import { FLAGS } from "../../data";

export const levels: readonly string[] = ["Novice", "Beginner", "Proficient"]

export let cats: Array<string> = []
cats[FLAGS.GROUPS.CAT_ETHICS] = "Ethics & Law"
cats[FLAGS.GROUPS.CAT_STATE_CRITICS] = "Statism Critics"
cats[FLAGS.GROUPS.CAT_ECONOMICS] = "Economics"

export const vis = {
    "category-width": 500,
    "category-input-y": 0,
    "reactFlowInstance": {
        fitView: {
            padding: 0.25
        }
    }
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
                                    [BOOKS["liberty-games-and-contracts"], BOOKS["the-enterprise-of-law"]]
                                ],
                                [
                                    [BOOKS["chaos-theory"], BOOKS["anarchy-and-the-law"]]
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
//export default libert_reading_list
//
export default [
    {
        id: '1',
        type: 'input',
        data: {
            label: (
                <>
                    Welcome to <strong>React Flow!</strong>
                </>
            ),
        },
        position: { x: 250, y: 0 },
    },
    {
        id: '2',
        data: {
            label: (
                <>
                    This is a <strong>default node</strong>
                </>
            ),
        },
        position: { x: 100, y: 100 },
    },
    {
        id: '3',
        data: {
            label: (
                <>
                    This one has a <strong>custom style</strong>
                </>
            ),
        },
        position: { x: 400, y: 100 },
        style: {
            background: '#D6D5E6',
            color: '#333',
            border: '1px solid #222138',
            width: 180,
        },
    },
    {
        id: '4',
        position: { x: 250, y: 200 },
        data: {
            label: 'Another default node',
        },
    },
    {
        id: '5',
        data: {
            label: 'Node id: 5',
        },
        position: { x: 250, y: 325 },
    },
    {
        id: '6',
        type: 'output',
        data: {
            label: (
                <>
                    An <strong>output node</strong>
                </>
            ),
        },
        position: { x: 100, y: 480 },
    },
    {
        id: '7',
        type: 'output',
        data: { label: 'Another output node' },
        position: { x: 400, y: 450 },
    },
    { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' },
    { id: 'e1-3', source: '1', target: '3' },
    {
        id: 'e3-4',
        source: '3',
        target: '4',
        animated: true,
        label: 'animated edge',
    },
    {
        id: 'e4-5',
        source: '4',
        target: '5',
        arrowHeadType: 'arrowclosed',
        label: 'edge with arrow head',
    },
    {
        id: 'e5-6',
        source: '5',
        target: '6',
        type: 'smoothstep',
        label: 'smooth step edge',
    },
    {
        id: 'e5-7',
        source: '5',
        target: '7',
        type: 'step',
        style: { stroke: '#f6ab6c' },
        label: 'a step edge',
        animated: true,
        labelStyle: { fill: '#f6ab6c', fontWeight: 700 },
    },
];
