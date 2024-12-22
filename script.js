
    const form = document.getElementById('registrationForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const phone = document.getElementById('phone').value;
        const location = document.getElementById('location').value;
        const description = document.getElementById('description').value;

        let message = '';
        let userMessage = '';

        if (gender === 'male') {
            if (age >= 18 && age <= 25) {
                message = 'يوليدي وحل في راسك بني حياتك وحل في كرايتك مزال عند الوقت ما معجلك شيء على زواج';
            } else if (age >= 25 && age <= 35) {
                message = 'أنت يصاحبي لحكك تتخيم أنت عددت شيباني 😂';
            }
        } else if (gender === 'female') {
            if (age >= 18 && age <= 25) {
                message = 'إنت مزلت بايره ايو الله يلطف خلي عنك تيك توك وتم عدل الغداء لأهلك';
            } else if (age >= 25 && age <= 35) {
                message = 'ي لال احمين واحمي جفتي إنت مافت تخيمتي 😂';
            }
        }

        // Displaying user details with message
        userMessage = `مرحباً ${fullName}!\n
                        تم التسجيل بنجاح!\n
                        معلوماتك:\n
                        العمر: ${age}\n
                        الهاتف: ${phone}\n
                        مكان السكن: ${location}\n
                        المواصفات التي تبحث عنها: ${description}\n`;

        messageDiv.innerHTML = `<strong>تم التسجيل بنجاح!</strong><br><br>${userMessage}<br><br>${message}`;
        messageDiv.classList.remove('error');
        messageDiv.classList.add('success');
        messageDiv.style.display = 'block';

        // Reset the form after submission
        form.reset();
    });
