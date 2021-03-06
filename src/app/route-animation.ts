import { trigger, transition, style, query, group, animateChild, animate, keyframes } from "@angular/animations";

export const fader =
    trigger('HarshName', [
        transition('*<=>*', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    opacity: 0,
                    transform: 'scale(0) translateY(100%)'

                }),
            ]),
            query(':enter', [
                animate('600ms ease',
                    style({
                        opacity: 1,
                        transform: 'scale(1) translateY(0)'
                    })
                )
            ])
        ]),
    ])



// Positioned

export const slider =
    trigger('HarshName', [
        transition('* =>isLeft', slideTo('left')),
        transition('* =>isRight', slideTo('right')),
        transition('* =>isabo', slideTo('right')),
        transition('isRigh => *', slideTo('left')),
        transition('isLeft => *', slideTo('right')),
        transition('* =>isabo', slideTo('right')),

    ])


function slideTo(direction: any) {
    const optional = { optional: true };
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                [direction]: 0,
                width: '100%'
            })
        ], optional),
        query(':enter', [
            style({ [direction]: '-100%' })
        ]),
        group([
            query(':leave', [
                animate('600ms ease', style({ [direction]: '100%' }))
            ], optional),
            query(':enter', [
                animate('600ms ease', style({ [direction]: '0%' }))
            ])
        ]),
        // Normalize the page style... Might not be necessary

        // Required only if you have child animations on the page
        // query(':leave', animateChild()),
        // query(':enter', animateChild()),
    ];
}



export const transform =
    trigger('HarshName', [
        transition('* => isLeft', translateTo({ x: -100, y: -100, rotate: -720 })),
        transition('* => isRight', translateTo({ x: 100, y: -100, rotate: 90 })),
        transition('isRight => *', translateTo({ x: -100, y: -100, rotate: 360 })),
        transition('isLeft => *', translateTo({ x: 100, y: -100, rotate: -360 }))
    ])


function translateTo({ x = 100, y = 0, rotate = 0 }) {
    const optional = { optional: true };
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], optional),
        query(':enter', [
            style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)` })
        ]),
        group([
            query(':leave', [
                animate('600ms ease-out', style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)` }))
            ], optional),
            query(':enter', [
                animate('600ms ease-out', style({ transform: `translate(0, 0) rotate(0)` }))
            ])
        ]),
    ];
}


export const stepper =
    trigger('HarshName', [
        transition('* <=> *', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                }),
            ]),
            group([
                query(':enter', [
                    animate('500ms ease', keyframes([
                        style({ transform: 'scale(0) translateX(100%) roatte(45deg) scale(0.1)', offset: 0 }),
                        style({ transform: 'scale(0.5) translateX(25%) rotate(180deg) scale(0.4)', offset: 0.3 }),
                        style({ transform: 'scale(0.5) translateX(25%) rotate(300deg) scale(0.8)', offset: 0.8 }),
                        style({ transform: 'scale(1) translateX(0%) rotate(360deg) scale(1)', offset: 1 }),
                    ])),
                ]),
                query(':leave', [
                    animate('1000ms ease', keyframes([
                        style({ transform: 'scale(1)', offset: 0 }),
                        style({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
                        style({ opacity: 0, transform: 'translateX(-50%) rotate(90deg) scale(4)', offset: 1 }),
                    ])),
                ])
            ]),
        ])

    ]);