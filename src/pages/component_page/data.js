import noteType1 from 'assets/transform/noteType1.jpg';
import noteType2 from 'assets/transform/noteType2.jpg';
const keyboardData = [
  [
    {keyboardNum:1,Element:noteType2,top:8,position:'height'},
    {keyboardNum:2,Element:noteType2,top:4,position:'height'},
    {keyboardNum:3,Element:noteType2,top:1,position:'height'},
    {keyboardNum:4,Element:noteType2,top:-3,position:'height'},
    {keyboardNum:5,Element:noteType2,top:-7,position:'height'},
    {keyboardNum:6,Element:noteType2,top:-10,position:'height'},
    {keyboardNum:7,Element:noteType2,top:-14,position:'height'},
  ],
  [
    {keyboardNum:1,Element:noteType1,top:10,position:'height'},
    {keyboardNum:2,Element:noteType1,top:7,position:'height'},
    {keyboardNum:3,Element:noteType1,top:3,position:'height'},
    {keyboardNum:4,Element:noteType1,top:0,position:'height'},
    {keyboardNum:5,Element:noteType1,top:-4,position:'height'},
    {keyboardNum:6,Element:noteType1,top:-7,position:'height'},
    {keyboardNum:7,Element:noteType1,top:-11,position:'height'},
  ],  [
    {keyboardNum:1,Element:noteType2,top:14,position:'low'},
    {keyboardNum:2,Element:noteType2,top:10,position:'low'},
    {keyboardNum:3,Element:noteType2,top:7,position:'low'},
    {keyboardNum:4,Element:noteType2,top:3,position:'low'},
    {keyboardNum:5,Element:noteType2,top:0,position:'low'},
    {keyboardNum:6,Element:noteType2,top:-4,position:'low'},
    {keyboardNum:7,Element:noteType2,top:-7,position:'low'},
  ],
];
const maxLineNum = 10;
export  {keyboardData,maxLineNum};