import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../contexts/auth-context';
import Input from '../UI/Input/Input';


const emailReducer = (state, action) => {
  //update
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.includes('@'),
    }    
  }

  //check validate
  if (action.type === 'USER_BLUR') {
    return {
      value: state.value,
      isValid: state.value.includes('@'),
    }    
  }

  return {
    value: '',
    isValid: false,
  }
}

const passwordReducer = (state, action) => { 
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6
    }
  }

  if (action.type === 'USER_BLUR') {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6
    }
  }

  return {
    value: '',
    isValid: false,
  }
}

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null });
  const { onLogin } = useContext(AuthContext);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() =>{
    const identifier  = setTimeout(() => {
      console.log('Checking Form validity')
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500)

    return () => {
      console.log('CLEAN UP')
      clearTimeout(identifier);
    }
  }, [emailIsValid, passwordIsValid])
  // 이렇게 하면 값이 변경될때에도 유효성 검증이 중복으로 일어나기때문에 isValid로 변경
  // }, [emailState, passwordState]) 

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: 'USER_INPUT',
      val: event.target.value
    })
    
    /**
     * MEMO: 여기서 emailState.value나 emailState.isValid를 사용하지 않고 
     * event.target.value를 사용하는 이유는
     * 콘솔로 찍어보면 아직 업데이트 되지 않았기 때문 !! -> 그래서 해결방법으로 useEffect로 처리 !!
     */
    // setFormIsValid(event.target.value.includes('@') && passwordState.isValid)
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'USER_BLUR'})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'USER_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailState.isValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        ></Input>
       
        <Input
          id="password"
          label="Password"
          type="password"
          isValid={passwordState.value}
          value={emailState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        ></Input>
       
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
