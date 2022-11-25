import { useForm } from "react-hook-form";

const ValidHookForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onValid = data => console.log(data);
    
    console.log(errors);

    return (
      <form onSubmit={handleSubmit(onValid)}>
        <div>
            <p>아이디</p>
            <input 
                {...register("id", {
                    required: '아이디를 입력해주세요.',
                    minLength: {
                        value: 3,
                        message: '3글자 이상 입력해주세요.',
                    },
                    maxLength: {
                        value: 20,
                        message: '20글자 이하 입력해주세요.',
                    },
                    pattern: {
                        value: /^[A-Za-z0-9가-힣]{3,20}$/,
                        message: '영문, 한글, 숫자만 입력가능해요.'
                    }
                })}
                placeholder='아이디를 입력해주세요.'
            />
            <p>{errors.id && errors.id.message}</p>
        </div>
        <div>
            <p>비밀번호</p>
            <input
                {...register("password", {
                    required: '비밀번호를 입력해주세요.',
                    minLength: {
                        value: 5,
                        message: '5글자 이상 입력해주세요.',
                    },
                    maxLength: {
                        value: 20,
                        message: '20글자 이하 입력해주세요.',
                    },
                    pattern: {
                        value: /^[A-Za-z0-9가-힣!@#$%^&*()_+=-]{5,20}$/,
                        message: '영문, 한글, 숫자만 입력가능해요.'
                    }
                })}
                placeholder='비밀번호를 입력해주세요.'
            />
            <p>{errors.password && errors.password.message}</p>
        </div>
        <div>
            <p>이메일</p>
            <input
                {...register("email", {
                    required: '이메일을 입력해주세요.',
                    minLength: {
                        value: 3,
                        message: '3글자 이상 입력해주세요.',
                    },
                    maxLength: {
                        value: 20,
                        message: '20글자 이하 입력해주세요.',
                    },
                    pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: '이메일을 올바르게 입력해주세요.'
                    }
                })}
                placeholder='이메일을 입력해주세요.'
            />
            <p>{errors.email && errors.email.message}</p>
        </div>
        <div>
            <p>닉네임</p>
            <input
                {...register("nickname", {
                    required: '닉네임을 입력해주세요.',
                    minLength: {
                        value: 2,
                        message: '2글자 이상 입력해주세요.',
                    },
                    maxLength: {
                        value: 10,
                        message: '10글자 이하 입력해주세요.',
                    },
                    pattern: {
                        value: /^[A-Za-z0-9가-힣]{3,20}$/,
                        message: '영문, 한글, 숫자만 입력가능해요.'
                    }
                })}
                placeholder='닉네임을 입력해주세요.'
            />
            <p>{errors.nickname && errors.nickname.message}</p>
        </div>
        <div style={{marginTop: 24}}>
            <input type="submit" />
        </div>
      </form>
    );
}

export default ValidHookForm;
