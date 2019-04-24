import vuejs from './images/vuejs.png'; 
import ruby from './images/ruby.png'; 
import react from './images/react.png'; 
import python from './images/python.png'; 
import js from './images/js.png'; 
import java from './images/java.png'; 
import elixir from './images/elixir.png'; 
import angular from './images/angular.png'; 

//We use this data array with objects of logo informations
const quizData = [
    {
        img: `${js}`,
        answer1: 'Ruby',
        answer2: 'Python',
        answer3: 'NodeJS',
        answer4: 'JS',
        right: '4',
        animation: 'animated bounceInLeft',
    },
    {
        img: `${ruby}`,
        answer1: 'CSS',
        answer2: 'Ruby',
        answer3: 'HTML',
        answer4: 'PHP',
        right: '2',
        animation: 'animated bounceInRight',
    },
    {
        img: `${java}`,
        answer1: 'JS',
        answer2: 'LaTeX',
        answer3: 'TypeScript',
        answer4: 'Java',
        right: '4',
        animation: 'animated bounceInUp',
    },
    {
        img: `${react}`,
        answer1: 'Perl',
        answer2: 'Redux',
        answer3: 'ReactJS',
        answer4: 'GraphSQL',
        right: '3',
        animation: 'animated jello',
    }, 
    {
        img: `${python}`,
        answer1: 'Swift',
        answer2: 'Rails',
        answer3: 'Python',
        answer4: 'MySQL',
        right: '3',
        animation: 'animated pulse',
    }, 
    {
        img: `${angular}`,
        answer1: 'Angular',
        answer2: 'Xamarin',
        answer3: 'ASP.net',
        answer4: 'C#',
        right: '1',
        animation: 'animated flash',
    },   
    {
        img: `${elixir}`,
        answer1: 'Scala',
        answer2: 'Elixir',
        answer3: 'Objective-C',
        answer4: 'C++',
        right: '2',
        animation: 'animated tada',
    },  
    {
        img: `${vuejs}`,
        answer1: 'Visual Basic',
        answer2: 'jQuery',
        answer3: 'F#',
        answer4: 'VueJS',
        right: '4',
        animation: 'animated fadeIn',
    }, 
]

export default quizData; 