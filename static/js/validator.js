function validateFirstName(text) {
    var pattern = /^[a-zA-Z]+$/;
    return pattern.test(text);
}

function validateUsername(text) {
    var pattern = /^[a-zA-Z0-9]{3,20}$/;
    return pattern.test(text);
}

function validatePincode(pincode) {
    var re = /^[0-9]{5,6}$/;
    return re.test(pincode);
}

document.getElementById('first_name').addEventListener('input', function(){
    var input_first_name = this.value;
    var message = ''
    this.classList.remove('is-invalid')

    if (input_first_name==''){
        message = 'This field cannot be blank'
        this.classList.add('is-invalid')
        this.nextElementSibling.textContent = message;
    }
    else if (!validateFirstName(input_first_name)){
        console.log('Invalid first name')
        message = 'Invalid first name'
        this.classList.add('is-invalid')
        this.nextElementSibling.textContent = message;
    };
});

document.getElementById('last_name').addEventListener('input', function(){
    var input_last_name = this.value;
    var message = ''
    this.classList.remove('is-invalid')

    if (input_last_name==''){
        message = 'This field cannot be blank'
        this.classList.add('is-invalid')
        this.nextElementSibling.textContent = message;
    }

    else if (!validateFirstName(input_last_name)){
        console.log('Invalid last name')
        message = 'Invalid last name'
        this.classList.add('is-invalid')
        this.nextElementSibling.textContent = message;
    };
});

document.getElementById('username').addEventListener('input', function(){

    var input_username = this.value;
    var message = ''
    this.classList.remove('is-invalid')

    if (input_username==''){
        message = 'This field cannot be blank'
        this.classList.add('is-invalid')
        this.nextElementSibling.textContent = message;
    }

    else if (!validateUsername(input_username)){
        message = 'Username should be 3-20 characters long and contain only letters and numbers.'
        this.classList.add('is-invalid')
        this.nextElementSibling.textContent = message;
    };
});

document.getElementById('pincode').addEventListener('input', function(){
    var input_pincode = this.value;
    var message = ''
    this.classList.remove('is-invalid')

    if (!validatePincode(input_pincode)){
        message = 'Enter a valid ZIP code'
        this.classList.add('is-invalid')
        this.nextElementSibling.textContent = message;
    };
});

document.getElementById('password').addEventListener('input', function(){
    var input_password = this.value;
    var message = ''
    this.classList.remove('is-invalid')

    if (input_password.length<6){
        message = "Password should contain at least 6 characters"
        this.classList.add('is-invalid')
        this.nextElementSibling.textContent = message;
    };
});

document.getElementById('password2').addEventListener('input', function(){
    var input_password = document.getElementById('password').value
    var input_password_2 = this.value;
    var message = ''
    this.classList.remove('is-invalid')

    if (input_password!=input_password_2){
        message = "Password don't match"
        this.classList.add('is-invalid')
        this.nextElementSibling.textContent = message;
    };
});

form = document.getElementById('signupForm')


function validateForm(){
    t = document.getElementsByClassName('is-invalid');
    return t.length==0
}


form.addEventListener('submit', (e)=>{
    t = document.getElementsByClassName('is-invalid');
    if (t.length!=1){
        e.preventDefault()
    }
})



