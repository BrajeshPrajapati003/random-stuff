-- patients whose gender is 'M':
    SELECT first_name, last_name, gender
    FROM patients
    WHERE gender = 'M';

-- patients who does NOT have allergies:
    SELECT first_name, last_name
    FROM patients
    WHERE allergies IS NULL;

-- patients first name starting with 'C'
    SELECT first_name 
    FROM patients
    WHERE first_name LIKE 'C%';

-- patients whose weight is in range - 100 to 120 (inclusive)
    SELECT first_name, last_name
    FROM patients
    WHERE 
        weight BETWEEN 100 AND 120;
----------------------------
    SELECT first_name, last_name
    FROM patients
    WHERE 
        weight >= 100 AND weight <= 120;

-- update the patients table where allergies = null with 'NKA'
    UPDATE patients
    SET allergies = 'NKA'
    WHERE allergies IS NULL;

-- show first name and last name concatinated into one column
    SELECT CONCAT (first_name, ' ', last_name) AS full_name
    FROM patients;
---------------------------
    SELECT first_name || ' ' || last_name
    FROM patients;

-- show first name, last name, full province name of each patient. Patients table has province_id column but not province name province name is in province_names table
    SELECT first_name, last_name, province_name
    FROM patients
    JOIN province_names
    ON province_id;
------------------------
    SELECT first_name, last_name, province_name
    FROM province_names
    JOIN patients
    ON province_names.province_id = patients.province_id;

-- show how many patients have a birth_date = 2010
    SELECT COUNT (*) AS total_patients
    FROM patients
    WHERE YEAR (birth_date) = 2010;
----------------------------
    SELECT COUNT(first_name) AS total_patients
    FROM patients
    WHERE
        birth_date >= '2010-01-01'
        AND birth_date <= '2010-12-31';
----------------------------
    SELECT COUNT(first_name) AS total_patients
    FROM patients
    WHERE
        birth_date BETWEEN '2010-01-01' AND '2010-12-31';

-- show greatest height
    SELECT MAX(height)
    FROM patients;

-- show the details of the patient with the greatest height
    SELECT first_name, last_name, height
    FROM patients
    WHERE height = (
        SELECT MAX(height)
        FROM patients
    );
-----------------------
    SELECT first_name, last_name,
    MAX(height) AS height
    FROM patients;
    -- some sql languages may not support it.

-- show all columns for patients with patient_id = 1,45,534,879 or 1000
    SELECT *
    FROM patients
    WHERE patient_id IN (1,45,534,879,1000);

-- show the total number of admissions
    SELECT COUNT(patient_id) AS total_admissions
    FROM admissions;

-- show all the columns from admissions where the patient was admitted and discharged on the same day
    SELECT *
    FROM admissions
    WHERE admission_date = discharge_date;

-- show the patient id and the total number of admissions for patient_id 579
    SELECT 
        patient_id, 
        COUNT(*) AS total_admissions
    FROM admissions
    WHERE patient_id = 579;

-- Based on the cities that patients live in, show unique cities that are in province_id 'NS'
    SELECT DISTINCT(city) AS unique_cities
    FROM patients
    WHERE province_id = 'NS';
--------------------------
    SELECT city AS unique_cities
    FROM patients
    GROUP BY city
    HAVING province_id = 'NS';

-- show unique birth years from patients and order them by ascending
    SELECT DISTINCT YEAR(birth_date) AS birth_year
    FROM patients
    ORDER BY birth_year;
-------------------------
    SELECT YEAR(birth_date) as birth_year
    FROM patients
    GROUP BY YEAR(birth_date);

-- show unique first names from the patients table which only occurs once in the list (freq = 1)
    SELECT first_name
    FROM patients
    GROUP BY first_name
    HAVING COUNT(first_name) = 1 --NOTE: COUNT(*)
    ORDER BY first_name;
------------------------
    SELECT first_name
    FROM (
        SELECT
            first_name,
            COUNT(*) AS freq
        FROM patients
        GROUP BY first_name
    )
    WHERE freq = 1;

-- show patient_id & first_name from patients where first_name start & ends with 's' and is at least 6 characters long
    SELECT patient_id, first_name
    FROM patients
    WHERE first_name LIKE 'S%____%s';
----------------------------
    SELECT patient_id, first_name
    FROM patients
    WHERE first_name LIKE 's____%s';
-----------------------------
    SELECT patient_id, first_name
    FROM patients
    WHERE
        first_name LIKE 's%s' AND LEN(first_name) >= 6;
-----------------------------
    SELECT patient_id, first_name
    FROM patients
    WHERE
        first_name LIKE 'S%'
        AND first_name LIKE '%s'
        AND LEN(first_name) >= 6;

-- show patient_id, first_name, last_name from patients whose diagnosis is 'Dementia'. diagnosis column is in admissions table not in patients 
    SELECT patients.patient_id, first_name, last_name
    FROM patients
    JOIN admissions
    ON patients.patient_id = admissions.patient_id
    WHERE diagnosis = 'Dementia';
--------------------------
    SELECT patient_id, first_name, last_name
    FROM patients
    WHERE patient_id IN (
        SELECT patient_id
        FROM admissions
        WHERE diagnosis = 'Dementia';
    );
---------------------------
    SELECT patient_id, first_name, last_name
    FROM patients p
    WHERE 'Dementia' IN (
        SELECT diagnosis
        FROM admissions
        WHERE admissions.patient_id = p.patient_id;
    );

