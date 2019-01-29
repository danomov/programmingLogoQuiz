import React, { Component } from 'react';
import quizData from './data';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

const QuizAppComponent = (props) => {
    
    return (
        <div>
            <img onLoad={() => props.handleLoad()} style={{width: '300px', height: '300px'}} alt='' src={quizData[props.index].img}/><br/>
            { (!props.isLoading) ?
            <div>
            <Button name='1' onClick={(e) => { props.handlePass(); props.handleNext(e)}} color='primary' variant='contained' style={{margin: '10px'}}>{quizData[props.index].answer1}</Button>
            <Button name='2' onClick={(e) => { props.handlePass(); props.handleNext(e)}} color='primary' variant='contained' style={{margin: '10px'}}>{quizData[props.index].answer2}</Button>
            <Button name='3' onClick={(e) => { props.handlePass(); props.handleNext(e)}} color='primary' variant='contained' style={{margin: '10px'}}>{quizData[props.index].answer3}</Button>
            <Button name='4' onClick={(e) => { props.handlePass(); props.handleNext(e)}} color='primary' variant='contained' style={{margin: '10px'}}>{quizData[props.index].answer4}</Button>
            <br/>     
            <Button onClick={props.handlePass} color='secondary' variant='contained'>Next</Button>
            </div>
            : <CircularProgress color='secondary'/>
            }
        </div>
    );
}


const withFunctionality = (WrappedComponent) => {
    return class extends Component {
        state = {
            quizNumber: 0,
            rightAnswers: 0,
            length: quizData.length,
            isLoading: true,
        }

        handlePass = () => {
            this.handleLoadReset();
            this.setState({quizNumber: this.state.quizNumber + 1});
        }

        handleLoadReset = () => {
            this.setState({isLoading: true});
        }
        
        handleNext = (e) => {
            if(e.target.name === quizData[this.state.quizNumber].right) {
            this.setState({quizNumber: this.state.quizNumber + 1, rightAnswers: this.state.rightAnswers + 1});
            }
            else {
            this.setState({quizNumber: this.state.quizNumber + 1});
            }
        }

        handleReset = () => {
            this.setState({
                quizNumber: 0,
                rightAnswers: 0,
                length: quizData.length,
                isLoading: true,
            })
        }

        handleLoad = () => {
            this.setState({isLoading: false});
        }

        render(){
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