import React, { Component } from 'react';
import quizData from './data';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

//Logo and answer buttons component
const QuizAppComponent = (props) => {
    
    return (
        <div>
            <div className={quizData[props.index].animation}>
            <img onLoad={() => props.handleLoad()} style={{width: '300px', height: '300px'}} alt='' src={quizData[props.index].img}/>
            </div>
            <br/>
            { (!props.isLoading) ?
            <div>
            <Button name='2' onClick={(e) => { props.handleNext(e); props.handlePass()}} color='primary' variant='contained' style={{margin: '10px'}}>{quizData[props.index].answer2}</Button>
            <Button name='1' onClick={(e) => { props.handleNext(e); props.handlePass()}} color='primary' variant='contained' style={{margin: '10px'}}>{quizData[props.index].answer1}</Button>
            <Button name='3' onClick={(e) => { props.handleNext(e); props.handlePass()}} color='primary' variant='contained' style={{margin: '10px'}}>{quizData[props.index].answer3}</Button>
            <Button name='4' onClick={(e) => { props.handleNext(e); props.handlePass()}} color='primary' variant='contained' style={{margin: '10px'}}>{quizData[props.index].answer4}</Button>
            <br/>     
            <Button onClick={props.handlePass} color='secondary' variant='contained'>Next</Button>
            </div>
            : <CircularProgress color='secondary'/>
            }
        </div>
    );
}

//HOC component that provides functionality for our 'QuizAppComponent'
const withFunctionality = (WrappedComponent) => {
    return class extends Component {
        constructor(){
        super();
        this.state = {
            quizNumber: 0,
            rightAnswers: 0,
            length: quizData.length,
            isLoading: true,
        }
        }    

        //This method is for getting new logo
        handlePass = () => {
            this.handleLoadReset();
            this.setState({quizNumber: this.state.quizNumber + 1});
        }

        //Turn on loading circle
        handleLoadReset = () => {
            this.setState({isLoading: true});
        }
        
        //After answer this method calculates the answer
        handleNext = (e) => {
            if(e.currentTarget.name === quizData[this.state.quizNumber].right) {
            this.setState({quizNumber: this.state.quizNumber + 1, rightAnswers: this.state.rightAnswers + 1});
            }
        }

        //Reset the progress 
        handleReset = () => {
            this.setState({
                quizNumber: 0,
                rightAnswers: 0,
                length: quizData.length,
                isLoading: true,
            })
        }

        //Turn of loading circle
        handleLoad = () => {
            this.setState({isLoading: false});
        }

        render(){
            //Conditional rendering checks the end of quiz
            if(this.state.quizNumber >= this.state.length) {
            return (
                <div style={{textAlign: 'center', marginTop: '70px'}}>
                <p>Thanks for participating.</p>
                <p>Your Result is:</p><h1>{this.state.rightAnswers}/{this.state.length}</h1>
                <Button onClick={this.handleReset} color='secondary' variant='contained'>RESET</Button> 
                </div>
            )}
            else {
            return (
                <div style={{textAlign: 'center', marginTop: '70px'}}>
                    <h1>Programming Logo Quiz</h1>
                    <WrappedComponent isLoading={this.state.isLoading} handlePass={this.handlePass} handleLoad={this.handleLoad} handleNext={this.handleNext} index={this.state.quizNumber}/>
                </div>
            )}
        }
    }
}


export default withFunctionality(QuizAppComponent);