var angleX = 0;
var angleY = 0;
var angleZ = 0;
// Gimbal Angle
var anglexx = 0;
var angleyy = 315;
var anglezz = 0;

var face_x = [
    [2, 11, 19, 5, 13, 22, 8, 16, 25],
    [17, 20, 23, 9, 12, 14, 0, 3, 6]
];

var face_y = [
    [0, 1, 2, 9, 10, 11, 17, 18, 19],
    [6, 7, 8, 14, 15, 16, 23, 24, 25]
];

var face_z = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [25, 24, 23, 22, 21, 20, 19, 18, 17]
];

var cube_axes = [
    [2, 11, 19, 5, 13, 22, 8, 16, 25, 1, 10, 18, 4, 21, 7, 15, 24, 0, 9, 17, 3, 12, 20, 6, 14, 23],
    [0, 1, 2, 9, 10, 11, 17, 18, 19, 3, 4, 5, 12, 13, 20, 21, 22, 6, 7, 8, 14, 15, 16, 23, 24, 25],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
]


var cube_rotation = [
    335, 315, 0, [
        [0, 1, "x"],
        [2, 3, "-x"],
        [4, 5, "y"],
        [6, 7, "-y"],
        [8, 9, "z"],
        [10, 11, "-z"]
    ],
    0, 0, 0
];

var cube_map = [
    ["one", 0, 0, 0, -100, -100, 100, [
        "-X", "-Y", "Z"], 0],
    ["two", 0, 0, 0, 0, -100, 100, [
        "-Y", "Z"], 0],
    ["three", 0, 0, 0, 100, -100, 100, [
        "-X", "-Y", "Z"], 0],
    ["four", 0, 0, 0, -100, 0, 100, [
        "-X", "Z"], 0],
    ["five", 0, 0, 0, 0, 0, 100, [
        "Z"], 0],
    ["six", 0, 0, 0, 100, 0, 100, [
        "X", "Z"], 0],
    ["seven", 0, 0, 0, -100, 100, 100, [
        "-X", "Y", "Z"], 0],
    ["eight", 0, 0, 0, 0, 100, 100, [
        "Y", "Z"], 0],
    ["nine", 0, 0, 0, 100, 100, 100, [
        "-X", "Y", "Z"], 0],
    ["ten", 0, 0, 0, -100, -100, 0, [
        "-X", "-Y"], 0],
    ["eleven", 0, 0, 0, 0, -100, 0, [
        "-Y"], 0],
    ["twelve", 0, 0, 0, 100, -100, 0, [
        "X", "-Y"], 0],
    ["thirteen", 0, 0, 0, -100, 0, 0, [
        "-X"], 0],
    ["fourteen", 0, 0, 0, 100, 0, 0, [
        "X"], 0],
    ["fifteen", 0, 0, 0, -100, 100, 0, [
        "-X", "Y"], 0],
    ["sixteen", 0, 0, 0, 0, 100, 0, [
        "Y"], 0],
    ["seventeen", 0, 0, 0, 100, 100, 0, [
        "X", "Y"], 0],
    ["eighteen", 0, 0, 0, -100, -100, -100, [
        "-X", "-Y", "-Z"], 0],
    ["nineteen", 0, 0, 0, 0, -100, -100, [
        "-Y", "-Z"], 0],
    ["twenty", 0, 0, 0, 100, -100, -100, [
        "X", "-Y", "-Z"], 0],
    ["twentyone", 0, 0, 0, -100, 0, -100, [
        "-X", "-Z"], 0],
    ["twentytwo", 0, 0, 0, 0, 0, -100, [
        "-Z"], 0],
    ["twentythree", 0, 0, 0, 100, 0, -100, [
        "X", "-Z"], 0],
    ["twentyfour", 0, 0, 0, -100, 100, -100, [
        "-X", "Y", "-Z"], 0],
    ["twentyfive", 0, 0, 0, 0, 100, -100, [
        "Y", "-Z"], 0],
    ["twentysix", 0, 0, 0, 100, 100, -100, [
        "X", "Y", "-Z"], 0],
];

var base_positions = [
    ["one", -100, -100, 100],
    ["two", 0, -100, 100],
    ["three", 100, -100, 100],
    ["four", -100, 0, 100],
    ["five", 0, 0, 100],
    ["six", 100, 0, 100],
    ["seven", -100, 100, 100],
    ["eight", 0, 100, 100],
    ["nine", 100, 100, 100],
    ["ten", -100, -100, 0],
    ["eleven", 0, -100, 0],
    ["twelve", 100, -100, 0],
    ["thirteen", -100, 0, 0],
    ["fourteen", 100, 0, 0],
    ["fifteen", -100, 100, 0],
    ["sixteen", 0, 100, 0],
    ["seventeen", 100, 100, 0],
    ["eighteen", -100, -100, -100],
    ["nineteen", 0, -100, -100],
    ["twenty", 100, -100, -100],
    ["twentyone", -100, 0, -100],
    ["twentytwo", 0, 0, -100],
    ["twentythree", 100, 0, -100],
    ["twentyfour", -100, 100, -100],
    ["twentyfive", 0, 100, -100],
    ["twentysix", 100, 100, -100]
];

var rotation_map = [
    ["0", 0, 0, 0, [1, 15, 20, 21, 22, 23]],
    ["1", 90, 0, 0, [8, 0, 2, 4, 5, 7]],
    ["2", 90, 0, -90, [12, 23, 3, 1, 20, 9]],
    ["3", 90, 0, -180, [13, 10, 4, 2, 19, 18]],
    ["4", 90, 0, -270, [14, 22, 1, 3, 11, 21]],
    ["5", 90, 90, 0, [11, 20, 12, 22, 6, 1]],
    ["6", 90, 180, 0, [10, 13, 17, 16, 7, 5]],
    ["7", 90, 270, 0, [9, 21, 23, 14, 1, 6]],
    ["8", 180, 0, 0, [15, 1, 9, 11, 12, 14]],
    ["9", 180, -90, 0, [18, 7, 10, 8, 2, 16]],
    ["10", 180, -180, 0, [3, 6, 11, 9, 23, 22]],
    ["11", 180, -270, 0, [19, 5, 8, 10, 17, 4]],
    ["12", 180, 0, -90, [17, 2, 18, 5, 13, 8]],
    ["13", 180, 0, -180, [6, 3, 21, 20, 14, 12]],
    ["14", 180, 0, -270, [16, 4, 7, 19, 8, 13]],
    ["15", 270, 0, 0, [0, 8, 16, 17, 18, 19]],
    ["16", 270, 0, 90, [22, 14, 6, 15, 9, 20]],
    ["17", 270, 0, 270, [23, 12, 15, 6, 21, 11]],
    ["18", 270, -90, 0, [21, 9, 22, 12, 3, 15]],
    ["19", 270, -270, 0, [20, 11, 14, 23, 15, 3]],
    ["20", 0, 90, 0, [5, 19, 13, 0, 16, 2]],
    ["21", 0, 270, 0, [7, 18, 0, 13, 4, 17]],
    ["22", 0, 0, 90, [4, 16, 5, 18, 10, 0]],
    ["23", 0, 0, 270, [2, 17, 19, 7, 0, 10]],
];

var key = [
    ["cw", "x", face_x[0], 0, true],
    ["ccw", "x", face_x[0], 0, true],
    ["cw", "x", face_x[1], 0, true],
    ["ccw", "x", face_x[1], 0, true],
    ["cw", "y", face_y[0], 0, true],
    ["ccw", "y", face_y[0], 0, true],
    ["cw", "y", face_y[1], 0, true],
    ["ccw", "y", face_y[1], 0, true],
    ["cw", "z", face_z[0], 0, true],
    ["ccw", "z", face_z[0], 0, true],
    ["cw", "z", face_z[1], 0, true],
    ["ccw", "z", face_z[1], 0, true],
    ["cw", "x", cube_axes[0], 0, true],
    ["ccw", "x", cube_axes[0], 0, true],
    ["cw", "y", cube_axes[1], 0, true],
    ["ccw", "y", cube_axes[1], 0, true],
    ["ccw", "z", cube_axes[2], 0, true],
    ["cw", "z", cube_axes[2], 0, true]
];


// // console.log("cube rotation at initial", cube_rotation);
// // console.log("rotation_map at initial", rotation_map);
//            console.log("cube map at initial", cube_map);

let keysPressed = {};
var pressed = false;

document.addEventListener('keydown', (event) => {
   keysPressed[event.key] = true;

    if (keysPressed['Shift'] && event.key == 'ArrowRight') {
        key_number = 14;
        key_check();
    }

    if (keysPressed['Shift'] && event.key == 'ArrowLeft') {
        key_number = 15;
        key_check();
    }

    if (keysPressed['Shift'] && event.key == 'ArrowUp') {
        if (cube_rotation[0] == 335) {
            direction = "cw"
            tilt_cube();
        }
    }

    if (keysPressed['Shift'] && event.key == 'ArrowDown') {
        if (cube_rotation[0] == 380) {
            direction = "ccw"
            tilt_cube();
        }
    }


    // Slight tilt cube 'Shift' and 'Up'
    function tilt_cube() {
        angle = 0;
        if (pressed === true) {
            return false;
        }
        pressed = true;

        let timer = setInterval(function() {
            if (direction == "cw") {
                cube_rotation[0] += 5;
            }
            if (direction == "ccw") {
                cube_rotation[0] -= 5;
            }
            document.getElementById("gimbal").style.transform = [
                "rotateX(", cube_rotation[0], "deg)",
                "rotateY(", cube_rotation[1], "deg)",
                "rotateZ(", cube_rotation[2], "deg)"
            ].join('');
        angle += 5;
        if (angle % 45 === 0) clearInterval(timer);
            angle == 0;
        }, 0.2);
        setTimeout(function() {
            pressed = false;
        }, 300);
    }

    if ((angleX == 0 || angleX == 90 || angleX == 180 || angleX == 270) &&
        (angleY == 0 || angleY == 90 || angleY == 180 || angleY == 270)) {
        if (keysPressed['s'] && event.key == 'ArrowRight') {
            key_number = 8;
            key_check();
        }
        if (keysPressed['s'] && event.key == 'ArrowLeft') {
            key_number = 9;
            key_check();
        }
        if (keysPressed['s'] && event.key == 'ArrowUp') {
            key_number = 12;
            key_check();
        }
        if (keysPressed['s'] && event.key == 'ArrowDown') {
            key_number = 13;
            key_check();
        }
        if (keysPressed['x'] && event.key == 'ArrowRight') {
            key_number = 10;
            key_check();
        }
        if (keysPressed['x'] && event.key == 'ArrowLeft') {
            key_number = 11;
            key_check();
        }
    }

    if ((angleY == 0 || angleY == 90 || angleY == 180 || angleY == 270) &&
        (angleZ == 0 || angleZ == 90 || angleZ == 180 || angleZ == 270)) {
        if (keysPressed['d'] && event.key == 'ArrowRight') {
            key_number = 0;
            key_check();
        }

        if (keysPressed['d'] && event.key == 'ArrowLeft') {
            key_number = 1;
            key_check();
        }

        if (keysPressed['d'] && event.key == 'ArrowUp') {
            key_number = 16;
            key_check();
        }
        if (keysPressed['d'] && event.key == 'ArrowDown') {
            key_number = 17;
            key_check();
        }

        if (keysPressed['a'] && event.key == 'ArrowRight') {
            key_number = 2;
            key_check();
        }
        if (keysPressed['a'] && event.key == 'ArrowLeft') {
            key_number = 3;
            key_check();
        }

    }

    if ((angleX == 0 || angleX == 90 || angleX == 180 || angleX == 270) &&
        (angleZ == 0 || angleZ == 90 || angleZ == 180 || angleZ == 270)) {
        if (keysPressed['w'] && event.key == 'ArrowRight') {
            key_number = 4;
            key_check();
        }
        if (keysPressed['w'] && event.key == 'ArrowLeft') {
            key_number = 5;
            key_check();
        }
        if (keysPressed['z'] && event.key == 'ArrowRight') {
            key_number = 6;
            key_check();
        }
        if (keysPressed['z'] && event.key == 'ArrowLeft') {
            key_number = 7;
            key_check();
        }
    }
});
document.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];
});

// Onclick
function play_button(i) {
    // Create vertical conatiner and children for sphere
    vertical = document.createElement('div');
    vertical.setAttribute("id", 'vertical');
    document.getElementById("large-circle").appendChild(vertical);
    for (let i = 0; i < 360;) {
        name = 'v-' + i;
        circle = document.createElement('div');
        circle.setAttribute("id", name);
        document.getElementById("large-circle").appendChild(circle);
        document.getElementById(name).style.backgroundColor = 'transparent';
        document.getElementById(name).style.borderRadius = '800px';
        document.getElementById(name).style.height = '200px';
        document.getElementById(name).style.width = '200px';
        document.getElementById(name).style.border = '1px white solid';
        document.getElementById(name).style.opacity = '0.8';
        document.getElementById(name).style.webkitTransformStyle = 'preserve-3d';
        document.getElementById(name).style.transformStyle = 'preserve-3d';
        document.getElementById(name).style.position = 'absolute';
        document.getElementById(name).style.display = 'inline-block';
        document.getElementById(name).style.transform = 'translateY(0px) rotateY(' + i + 'deg)';
        i = i + 10;
    }
    // Hide play symbol
    document.getElementById(i).style.opacity = 0;
    // Reposition cube to middle of screen, making visible and start animation
    document.getElementById('container').style.position = 'relative';
    document.getElementById('container').style.opacity = 0.9;
    document.getElementById('gimbal').style.animation = 'rotate-animation 15s ease-out normal'; 
    for (let i = 0; i < cube_map.length; i++) {
        // Start animation for each cube in 'explosion'
        document.getElementById(cube_map[i][0]).style.animation = 'rotate-' + cube_map[i][0] + ' 60s ease-out normal';
    }  
    // After animation has run, remove animation to allow user input without errors
    setTimeout(function() {
        for (let i = 0; i < cube_map.length; i++) {
            document.getElementById(cube_map[i][0]).style.animation = null;
        }
        document.getElementById('gimbal').style.animation = null; 
    }, 30000);     
}

function key_check() {
    // Already pressed don't allow another press for 0.3s, to block rapid repition of function causing error
    if (pressed === true) {
        return false;
    }
    rotating = key[key_number][4];
    direction = key[key_number][0];
    axis = key[key_number][1];
    face = key[key_number][2];
    angle = key[key_number][3];
    pressed = key[key_number][4];
    side_rotate();
    setTimeout(function() {
        pressed = false;
    }, 300);
}

function side_rotate() {
    let timer = setInterval(function() {
        if (direction == "cw") {
            angle += 5;
        }
        if (direction == "ccw") {
            angle -= 5;
        }
        for (let i = 0; i < face.length; i++) {
            k = face[i];
            check();
        }
        if (angle == 90 || angle == -90) {
            rotate();
            for (let i = 0; i < face.length; i++) {
                k = face[i];
                if (axis == "x") {
                    cube_map[k][1] = 0;
                    a = 0
                    b = 1
                }
                if (axis == "y") {
                    cube_map[k][2] = 0;
                    a = 2
                    b = 3
                }
                if (axis == "z") {
                    cube_map[k][3] = 0;
                    a = 4
                    b = 5
                }
                if (direction == "cw") {
                    cube_map[k][8] = rotation_map[cube_map[k][8]][4][a];
                }
                if (direction == "ccw") {
                    cube_map[k][8] = rotation_map[cube_map[k][8]][4][b];
                }
                rearrange();
            }
            angle = 0;
        }
        if (angle % 90 === 0) clearInterval(timer);
            angle == 0;
        }, 0.2);
    }

function rotate() {
    var cw = [6, 3, 0, 7, 4, 1, 8, 5, 2, 14, 12, 9, 15, 10, 16, 13, 11, 23, 20, 17, 24, 21, 18, 25, 22, 19];
    var ccw = [2, 5, 8, 1, 4, 7, 0, 3, 6, 11, 13, 16, 10, 15, 9, 12, 14, 19, 22, 25, 18, 21, 24, 17, 20, 23];
    temp = [];
    for (let i = 0; i < face.length; i++) {
        temp[i] = cube_map[face[i]];
    }
    if (direction == "cw") {
        for (let i = 0; i < face.length; i++) {
            cube_map[face[i]] = temp[cw[i]];
        }
    }
    if (direction == "ccw") {
        for (let i = 0; i < face.length; i++) {
            cube_map[face[i]] = temp[ccw[i]];
        }
    }
}

function check() {
    if (direction == "cw") {
        if (axis == "x") {
            a = 1;
        }
        if (axis == "y") {
            a = 2;
        }
        if (axis == "z") {
            a = 3;
        }
        cube_map[k][a] += 5;
    }

    if (direction == "ccw") {
        if (axis == "x") {
            a = 1;
        }
        if (axis == "y") {
            a = 2;
        }
        if (axis == "z") {
            a = 3;
        }
        cube_map[k][a] -= 5;
    }
    document.getElementById(cube_map[k][0]).style.transform = [
        "rotate3d(1, 0, 0,", cube_map[k][1], "deg) ",
        "rotate3d(0, 1, 0,", cube_map[k][2], "deg) ",
        "rotate3d(0, 0, 1,", cube_map[k][3], "deg) ",
        "translate3d(", cube_map[k][4], "px, ",
        cube_map[k][5], "px, ",
        cube_map[k][6], "px", ")"
    ].join('');
}

function rearrange() {
    cube_map[k][4] = base_positions[k][1];
    cube_map[k][5] = base_positions[k][2];
    cube_map[k][6] = base_positions[k][3];

    document.getElementById(cube_map[k][0]).getElementsByClassName("cube")[0].style.transform = [
        "rotate3d(1, 0, 0,", rotation_map[cube_map[k][8]][1], "deg) ",
        "rotate3d(0, 1, 0,", rotation_map[cube_map[k][8]][2], "deg) ",
        "rotate3d(0, 0, 1,", rotation_map[cube_map[k][8]][3], "deg) ",
        ].join('');
    document.getElementById(cube_map[k][0]).style.transform = [
        "rotate3d(1, 0, 0,", cube_map[k][1], "deg) ",
        "rotate3d(0, 1, 0,", cube_map[k][2], "deg) ",
        "rotate3d(0, 0, 1,", cube_map[k][3], "deg) ",
        "translate3d(", cube_map[k][4], "px, ",
        cube_map[k][5], "px, ",
        cube_map[k][6], "px", ")"
    ].join('');
}