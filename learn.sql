                -- ! EASY PROBLEMS


-- Patients whose gender is 'M':
    SELECT first_name, last_name, gender
    FROM patients
    WHERE gender = 'M';

-- Patients who does NOT have allergies:
    SELECT first_name, last_name
    FROM patients
    WHERE allergies IS NULL;

-- Patients first name starting with 'C'
    SELECT first_name 
    FROM patients
    WHERE first_name LIKE 'C%';

-- Patients whose weight is in range - 100 to 120 (inclusive)
    SELECT first_name, last_name
    FROM patients
    WHERE 
        weight BETWEEN 100 AND 120;
----------------------------
    SELECT first_name, last_name
    FROM patients
    WHERE 
        weight >= 100 AND weight <= 120;

-- Update the patients table where allergies = null with 'NKA'
    UPDATE patients
    SET allergies = 'NKA'
    WHERE allergies IS NULL;

-- Show first name and last name concatinated into one column
    SELECT CONCAT (first_name, ' ', last_name) AS full_name
    FROM patients;
---------------------------
    SELECT first_name || ' ' || last_name
    FROM patients;

-- Show first name, last name, full province name of each patient. Patients table has province_id column but not province name province name is in province_names table
    SELECT first_name, last_name, province_name
    FROM patients
    JOIN province_names
    ON province_id;
------------------------
    SELECT first_name, last_name, province_name
    FROM province_names
    JOIN patients
    ON province_names.province_id = patients.province_id;

-- Show how many patients have a birth_date = 2010
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
    WHERE -- NOTE: YEAR-MONTH-DAY
        birth_date BETWEEN '2010-01-01' AND '2010-12-31';

-- Show greatest height
    SELECT MAX(height)
    FROM patients;

-- Show the details of the patient with the greatest height
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

-- Show all columns for patients with patient_id = 1,45,534,879 or 1000
    SELECT *
    FROM patients
    WHERE patient_id IN (1,45,534,879,1000);

-- Show the total number of admissions
    SELECT COUNT(patient_id) AS total_admissions
    FROM admissions;

-- Show all the columns from admissions where the patient was admitted and discharged on the same day
    SELECT *
    FROM admissions
    WHERE admission_date = discharge_date;

-- Show the patient id and the total number of admissions for patient_id 579
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


                -- ! MEDIUM PROBLEMS


-- Show unique birth years from patients and order them by ascending
    SELECT DISTINCT YEAR(birth_date) AS birth_year
    FROM patients
    ORDER BY birth_year;
-------------------------
    SELECT YEAR(birth_date) as birth_year
    FROM patients
    GROUP BY YEAR(birth_date);

-- Show unique first names from the patients table which only occurs once in the list (freq = 1)
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

-- Show patient_id & first_name from patients where first_name start & ends with 's' and is at least 6 characters long
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

-- Show patient_id, first_name, last_name from patients whose diagnosis is 'Dementia'. diagnosis column is in admissions table not in patients 
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

-- Display every patient's first_name. Order the list by the length of each name and then by alphabetically.
    SELECT first_name
    FROM patients
    ORDER BY LEN(first_name), first_name;

-- Show the total count of male & female patients in the patients table. Display the two results in the same row.
    SELECT 
        (SELECT COUNT(*) FROM patients WHERE gender = 'M') AS male_count,
        (SELECT COUNT(*) FROM patients WHERE gender = 'F') AS female_count
    ;
------------------------------
    SELECT 
        SUM(gender = 'M') AS male_count,
        SUM(gender = 'F') AS female_count
    FROM patients;
--------------------------------
    SELECT 
        SUM(CASE WHEN gender = 'M' THEN 1 END) AS male_count,
        SUM(CASE WHEN gender = 'F' THEN 1 END) AS female_count
    FROM patients;

-- Show first and last name, allergies from patients which have allergies to either 'Penicillin' or 'Morphine'. Show results ordered ascending by allergies then by first_name then by last_name.
    SELECT first_name, last_name, allergies
    FROM patients
    WHERE 
        allergies = 'Penicillin' OR allergies = 'Morphine'
    ORDER BY 
        allergies ASC, 
        first_name ASC, 
        last_name ASC;
-------------------------
    SELECT first_name, last_name, allergies
    FROM patients
    WHERE
        allergies IN (
            'Penicillin', 'Morphine'
        )
    ORDER BY allergies, first_name, last_name;

-- Show patient_id, diagnosis from admissions. Find patients admitted multiple times for the same diagnosis.
    SELECT patient_id, diagnosis
    FROM admissions
    GROUP BY patient_id, diagnosis
    HAVING COUNT(*) > 1;    --IMP: for the same diagnosis

-- Show the city and total number of patients in the city. Order from most to least patients & then by city name ascending.
    SELECT city, COUNT(*) AS num_patients
    FROM patients
    GROUP BY city
    ORDER BY COUNT(*) DESC, city;
----------------------------
    SELECT city, COUNT(*) AS num_patients
    FROM patients
    GROUP BY city
    ORDER BY num_patients DESC, city ASC;

-- Show first name, last name & role of every person that is patient or doctor. The roles are either "Patient" or "Doctor".
    SELECT first_name, last_name, 'Patient' AS role
    FROM patients
    UNION ALL
    SELECT first_name, last_name, 'Doctor' --NOTE: 'AS role' is optional here
    FROM doctors;

-- Show all allergies ordered by popularity. Remove NULL values from query.
    SELECT allergies, COUNT(*) AS total_diagnosis
    FROM patients
    WHERE allergies IS NOT NULL
    GROUP BY allergies
    ORDER BY total_diagnosis DESC;
----------------------------
    SELECT allergies, COUNT(*)
    FROM patients 
    WHERE allergies NOT NULL
    GROUP BY allergies
    ORDER BY COUNT(*) DESC;
---------------------------
    SELECT 
        allergies
        COUNT(allergies) AS total_diagnosis
    FROM patients
    GROUP BY allergies
    HAVING -- NOTE: NOT NULL = IS NOT NULL
        allergies IS NOT NULL
    ORDER BY total_diagnosis DESC;

-- Show all patients who were born in the 1970s decade. Sort the list starting from the earliest birth_date.
    SELECT first_name, last_name, birth_date
    FROM patients
    WHERE YEAR(birth_date) BETWEEN 1970 AND 1979
    ORDER BY birth_date;
----------------------------
    SELECT first_name, last_name, birth_date
    FROM patients
    WHERE -- NOTE: YEAR-MONTH-DAY
        birth_date >= '1970-01-01'
        AND birth_date < '1980-01-01'
    ORDER BY birth_date;
----------------------------
    SELECT first_name, last_name, birth_date
    FROM patients
    WHERE YEAR(birth_date) LIKE '197%'
    ORDER BY birth_date ASC;

-- Display full name in a single column (last_name in upper letters then first_name in lower letters both separated by a comma). Order by first_name in descending.
    SELECT
        CONCAT(UPPER(last_name), ',', LOWER(first_name)) AS new_name_format
    FROM patients
    ORDER BY first_name DESC;
--------------------
    SELECT
        UPPER(last_name) || ',' || LOWER(first_name) AS new_name_format
    FROM patients
    ORDER BY first_name DESC;

-- Show the province_id(s), sum of height; where the total sum of its patient's height is greater than or equal to 7,000.
    SELECT province_id, SUM(height) AS sum_height
    FROM patients
    GROUP BY province_id
    HAVING sum_height >= 7000;
--------------------------
    SELECT *
    FROM (
        SELECT province_id, SUM(height) AS sum_height
        FROM patients
        GROUP BY province_id
    )
    WHERE sum_height >= 7000;

-- Show the difference b/w the largest and the smallest weight for patients with the last name 'Maroni'.
    SELECT 
        (MAX(weight) - MIN(weight)) AS weight_delta
    FROM patients
    WHERE last_name = 'Maroni';

-- Show all the days of the month (1-31) and how many admission_dates occured on that day. Sort by the day with most to least admissions.
    SELECT
        DAY(admission_date) AS day_number,
        COUNT(*) AS number_of_admissions
    FROM admissions
    GROUP BY day_number
    ORDER BY number_of_admissions DESC;

-- Show * for patient_id 542's most recent admission_date.
    SELECT *
    FROM admissions
    WHERE patient_id = 542
    GROUP BY patient_id
    HAVING admission_date = MAX(admission_date);
---------------------------
    SELECT *
    FROM admissions
    WHERE patient_id = '542'
    AND admission_date = (
        SELECT MAX(admission_date)
        FROM admissions
        WHERE patient_id = '542'
    );
---------------------------
    SELECT *
    FROM admissions
    WHERE patient_id = 542
    ORDER BY admission_date = DESC
    LIMIT 1;
-------------------------
    SELECT *
    FROM admissions
    GROUP BY patient_id
    HAVING
        patient_id = 542
        AND MAX(admission_date);

-- Show patient_id, attending_doctor_id, & diagnosis for admissions that match one of the two criteria:
    /*
    1. patient_id is an odd number & attending_doctor_id is either 1, 5, or 19.
    2. attending_doctor_id contains a 2 & the length of patient_id is 3 characters.
    */
    SELECT patient_id, attending_doctor_id, diagnosis
    FROM admissions
    WHERE   
        (patient_id % 2 != 0 AND attending_doctor_id IN (1, 5, 19))
        OR
        (attending_doctor_id LIKE '%2%' AND LEN(patient_id) = 3)
    ;

-- IMP:Q- For each doctor, display their id, full name, & the first & last admission date they attended.
    SELECT 
        doctor_id,
        CONCAT(first_name, ' ', last_name) AS full_name,
        MIN(admission_date) AS first_admission_date,
        MAX(admission_date) AS last_admission_date
    FROM admissions a
    JOIN doctors d
    ON a.attending_doctor_id = d.doctor_id
    GROUP BY doctor_id;

-- RISK: MYSQL DOESN'T SUPPORT CONCATENATION OPERATOR ( || ) BY DEFAULT, it takes it as a logical OR operator, hence using || doesn't provide maximum compatibility and doesn't care about DB migrations.
-- RISK: PostgreSQL/Oracle is perfectly fine with concatenation ( || ) operator.
-- CTX: USE CONCAT() function in MySQL/oracle/interview code.

-- For every admission, display the patient's full name, their admission diagnosis, & their doctor's full name who diagnosed their problem.
    SELECT 
        CONCAT(P.first_name, ' ', p.last_name) AS patient_name,
        diagnosis,
        CONCAT(d.first_name, ' ', d.last_name) AS doctor_name
    FROM patients p
    JOIN admissions a, doctors d
    ON 
        a.attending_doctor_id = p.patient_id
        AND
        d.doctor_id = a.attending_doctor_id;
-------------------------------
    SELECT
        CONCAT(patients.first_name, ' ', patients.last_name) AS patient_name,
        diagnosis,
        CONCAT(doctors.first_name, ' ', doctors.last_name) AS doctor_name
    FROM patients
        JOIN admissions ON admissions.patient_id = patients.patient_id
        JOIN doctors ON doctors.doctor_id = admissions.attending_doctor_id;
    
-- Display the first name, last name & no. of duplicate patients based on their first name and last name.
    SELECT
        first_name,
        last_name,
        COUNT(*) AS num_of_duplicates
    FROM patients
    GROUP BY first_name, last_name
    HAVING COUNT(*) > 1;

-- Display patient's full name, height in the units feet rounded to 1 decimal, weight in the unit pounds rounded to 0 decimals, birth_date, gender non abbreviated.
/*
    Convert CM to feet by dividing by 30.48.
    Convert KG to pounds by multiplying by 2.205.
*/
    SELECT
        CONCAT(first_name, ' ', last_name) AS 'patient_name',
        ROUND(height / 30.48, 1) AS 'height "Feet"',
        ROUND(weight * 2.205, 0) AS 'weight "Pounds"',
        birth_date,
        CASE
            WHEN gender = 'M' THEN 'MALE'
            ELSE 'FEMALE'
        END AS 'gender_type'
    FROM patients;

-- Show patient_id, first_name, last_name from patients whose does not have any records in the admissions table.
    SELECT 
        patients.patient_id, first_name, last_name
    FROM patients
    WHERE patients.patient_id NOT IN (
        SELECT admissions.patient_id
        FROM admissions
    );
-------------------------
    SELECT
        p.patient_id,
        first_name, last_name
    FROM patients p
    LEFT JOIN admissions a
    ON p.patient_id = a.patient_id
    WHERE a.patient_id IS NULL;

-- Display a single row with max_visits, min_visits, average_visits where the max, min and avg number of admissions per day is calculated. Average is rounded to 2 decimal places.
    SELECT
        MAX(no_of_admissions) AS max_visits,
        MIN(no_of_admissions) AS min_visits,
        ROUND(AVG(no_of_admissions), 2) AS average_visits
    FROM (
        SELECT 
            admission_date, 
            COUNT(*) AS no_of_admissions
        FROM admissions
        GROUP BY admission_date
    );
    
-- Display every patient that has at least one admission & show their most recent admission along with the patient & doctor's full name.
    SELECT
        CONCAT(p.first_name, ' ', p.last_name) AS patient_name,
        a.admission_date AS latest_admission_date,
        CONCAT(d.first_name, ' ', d.last_name)
    FROM admissions a
    JOIN patients p
        ON p.patient_id = a.patient_id
    JOIN doctors d
        ON d.doctor_id = a.attending_doctor_id
    WHERE a.admission_date = (
        SELECT MAX(a2.admission_date)
        FROM admissions a2
        WHERE a2.patient_id = a.patient_id
    );

                -- ! HARD PROBLEMS


-- Show all of the patients grouped into weight groups. Show the total amount of patients in each weight group. Order the list by the weight group descending.
    /*
    For example, if they weight 100 to 109 they are placed in the 100 weight group, 110-119 = 110 weight group, etc.
    */
    SELECT 
        COUNT(*) as patients_in_group,
        FLOOR(weight / 10) * 10 AS weight_group
    FROM patients
    GROUP BY weight_group
    ORDER BY weight_group DESC;
-------------------------------
    SELECT 
        COUNT(*) AS patients_in_group,
        TRUNCATE(weight, -1) AS weight_group
    FROM patients
    GROUP BY TRUNCATE(weight, -1)
    ORDER BY weight_group DESC;
-------------------------------
    SELECT 
        COUNT(patient_id) AS patients_in_group,
        weight - weight % 10 AS weight_group
    FROM patients
    GROUP BY weight_group
    ORDER BY weight_group DESC;


/*

! What TRUNCATE() actually does

General syntax
TRUNCATE(number, decimals)

* number → the value to operate on
* decimals → how many decimal places to keep

👉 Key rule:
TRUNCATE cuts digits off, it does not round.

CTX: Positive vs negative decimals
Positive decimals → after decimal point
TRUNCATE(72.987, 2) → 72.98
TRUNCATE(72.987, 0) → 72

🔥 Negative decimals → before decimal point (this is your case)
TRUNCATE(weight, -1)

Means:
“Remove digits to the left of the decimal point, starting from the units place.”

In human terms:
Drop the last digit of the integer.

*/

-- Show patient_id, weight, height, isObese from the patients table. Display isObese as a boolean 0 or 1. Obese is defined as weight(kg)/height(m)^2) >= 30. Weight is in units kg. height is in units cm.
    SELECT patient_id, weight, height,
        (CASE
            WHEN weight/(POWER(height/100.0, 2)) >= 30 THEN 1
            ELSE 0
        END) AS isObese
    FROM patients;

    -- CTX: If you divide an int by an int you will get an int. Dividing an int by a float will return a float.
    -- CTX: That's why you have to divide by 100.0 and not 100.
    -- CTX: Use CAST(variable_name AS FLOAT) function if you are dividing by two variables.
--------------------------------------
    SELECT 
        patient_id, weight, height,
        weight / POWER(CAST(height AS float) / 100, 2) >= 30 AS isObese
    FROM patients;

-- Show patient_id, first_name, last_name, & attending doctor's specialty. Show only the patients who has a diagnosis as 'Epilepsy' & the doctor's first name is 'Lisa'. Check patients, admissions, & doctors tables for required info.
    SELECT 
        p.patient_id,
        p.first_name AS patient_first_name,
        p.last_name AS patient_last_name,
        d.specialty AS attending_doctor_specialty
    FROM patients p
    JOIN admissions a 
        ON p.patient_id = a.patient_id
    JOIN doctors d 
        on d.doctor_id = a.attending_doctor_id
    WHERE 
        a.diagnosis = 'Epilepsy' AND d.first_name = 'Lisa'; 
------------------------------------
    SELECT
        p.patient_id,
        p.first_name,
        p.last_name,
        d.specialty
    FROM patients AS p 
    JOIN (
        SELECT *
            FROM admissions AS a 
            JOIN doctors AS d 
                ON a.attending_doctor_id = d.doctor_id
    ) AS d1 USING (patient_id)
    WHERE
        d1.diagnosis = 'Epilepsy'
        AND d1.first_name = 'Lisa';
-------------------------------------
    SELECT
        p.patient_id, p.first_name,
        p.last_name, d.specialty
    FROM patients p, admissions a, doctors d
    WHERE
        p.patient_id = a.patient_id
        AND a.attending_doctor_id = d.doctor_id
        AND a.diagnosis = 'Epilepsy'
        AND d.first_name = 'Lisa';
-------------------------------------
    WITH patient_table AS (
        SELECT
            patients.patient_id,
            patients.first_name,
            patients.last_name,
            admissons.attending_doctor_id
        FROM patients
        JOIN admissions 
            ON patients.patient_id = admissions.patient_id
        WHERE
            admissions.diagnosis = 'Epilepsy'
    )
    SELECT
        patient_table.patient_id,
        patient_table.first_name,
        patient_table.last_name,
        doctors.specialty
    FROM patient_table
    JOIN doctors 
        ON patient_table.attending_doctor_id = doctors.doctor_id
    WHERE doctors.first_name = 'Lisa';

-- All patients who have gone through admissions, can see their medical documents on our site. Those patients are given a temporary password after their first admission. Show the patient_id, temp_password.
    /*
        The password must be the foll, in order:
        1. patient_id
        2. the numerical length of patient's last_name
        3. year of patient's birth_date
    */
    SELECT 
        DISTINCT p.patient_id,
        CONCAT(
            p.patient_id,
            LEN(last_name),
            YEAR(birth_date)
        ) AS temp_password
    FROM patients p 
    JOIN admissions a
        ON a.patient_id = p.patient_id;
-----------------------------------
    SELECT
        DISTINCT p.patient_id,
        p.patient_id || FLOOR(LEN(last_name)) || FLOOR(YEAR(birth_date)) AS temp_password
    FROM patients p 
    JOIN admissions a 
        ON p.patient_id = a.patient_id;
------------------------------------
    SELECT
        p.patient_id,
        a.patient_id || floor(LEN(p.last_name)) || floor(YEAR(birth_date)) AS temp_password
    FROM patients p 
    JOIN admissions a 
        on a.patient_id = p.patient_id
    GROUP by p.patient_id;

-- Each admission costs $50 for patients without insurance, & $10 for patients with insurance. All patients with an even patient_id have insurance. Give each patient a 'Yes' if they have insurance, & a 'No' if they don't have insurance. Add up the admission_total cost for each has_insurance group.
    SELECT 
        (CASE
            WHEN patient_id%2 = 0 THEN 'Yes'
            ELSE 'No'
        END) AS has_insurance,
        SUM(
            CASE
                WHEN patient_id%2 = 0 THEN 10
                ELSE 50
            END
        ) AS cost_after_insurance
    FROM admissions 
    GROUP BY has_insurance;
-----------------------------------
    SELECT 
        'No' AS has_insurance, 
        COUNT(*) * 50 AS cost
    FROM admissions
    WHERE patient_id % 2 = 1
    GROUP BY has_insurance
    UNION
    SELECT 
        'Yes' AS has_insurance,
        COUNT(*) * 10 AS cost
    FROM admissions
    WHERE patient_id % 2 = 0
    GROUP BY has_insurance;
------------------------------------
    SELECT 
        has_insurance,
        CASE
            WHEN has_insurance = 'Yes' THEN COUNT(has_insurance) * 10
            ELSE COUNT(has_insurance) * 50
        END AS cost_after_insurance
    FROM (
        SELECT 
            CASE
                WHEN patient_id % 2 = 0 THEN 'Yes'
                ELSE 'No'
            END AS has_insurance
        FROM admissions
    )
    GROUP BY has_insurance;
-------------------------------------
    SELECT 
        has_insurance,
        SUM(admission_cost) AS admission_total
    FROM (
        SELECT patient_id,
            CASE 
                WHEN patient_id % 2 = 0 THEN 'Yes'
                ELSE 'No'
            END AS has_insurance,
            CASE
                WHEN patient_id % 2 = 0 THEN 10
                ELSE 50
            END AS admission_cost
        FROM admissions
    )
    GROUP BY has_insurance;

-- Show the provinces that has more patients identified as 'M' than 'F'. Must only show full province_name.
    SELECT province_name
    FROM patients p 
    JOIN province_names pr
    ON p.province_id = pr.province_id
    GROUP BY pr.province_name
    HAVING  
        COUNT(CASE WHEN p.gender = 'M' THEN 1 END) >
        COUNT(CASE WHEN p.gender = 'F' THEN 1 END);
--------------------------------------
    SELECT province_name
    FROM (
        SELECT province_name,
            SUM(gender = 'M') AS n_male,
            Sum(gender = 'F') AS n_female
        FROM patients pa 
        JOIN province_names pr 
        ON pa.province_id = pr.province_id
        GROUP BY province_name
    )
    WHERE n_male > n_female;
--------------------------------------
    SELECT pr.province_name
    FROM patients AS pa
    JOIN province_names AS pr
    ON pa.province_id = pr.province_id
    GROUP BY pr.province_name
    HAVING
        SUM(gender = 'M') > SUM(gender = 'F');
---------------------------------------
    SELECT province_name
    FROM patients P
    JOIN province_names r
    ON p.province_id = r.province_id
    GROUP BY province_id
    HAVING 
        SUM(CASE WHEN gender = 'M' THEN 1 ELSE -1 END) > 0;
--------------------------------------
    SELECT pr
    FROM patients AS pa
    JOIN province_names AS pr 
        ON pr.province_id = pa.province_id
    GROUP BY pr.province_name
    HAVING 
        COUNT(CASE WHEN gender = 'M' THEN 1 END) > COUNT(*) * 0.5;
--------------------------------------
    SELECT province_name
    FROM province_names
    WHERE province_id IN (
        SELECT province_id
        FROM patients
        GROUP BY province_id
        HAVING 
            SUM(gender = 'M') > SUM(gender = 'F')
    );

-- We are looking for a specific patient. Pull all columns for the patient who matches the following criteria:
    /*
    - First_name contains an 'r' after the first two letters.
    - Identifies their gender as 'F'
    - Born in February, May, or December
    - Their weight would be between 60kg and 80kg
    - Their patient_id is an odd number
    - They are from the city 'Kingston'
    */
    SELECT *
    FROM patients
    WHERE
        first_name LIKE '__r%' AND
        gender = 'F' AND
        MONTH(birth_date) IN (2, 5, 12) AND
        weight <= 80 AND weight >= 60 AND
        patient_id % 2 = 1 AND
        city = 'Kingston';

-- Show the percent of patients that have 'M' as their gender. Round the answer to the nearest hundredth number & in percent form.
    SELECT
        CONCAT(
            ROUND(
                SELECT COUNT(*)
                FROM patients
                WHERE gender = 'M'
                / CAST(COUNT(*) AS float),
                4
            )*100,
        '%') AS percent_of_male
    FROM patients;
-----------------------------
    SELECT
        ROUND(100 * AVG(gender = 'M'), 2) || '%' AS percent_of_male
    FROM patients;
-----------------------------
    SELECT
        CONCAT(ROUND(SUM(gender = 'M') / CAST(COUNT(*) AS float), 4) * 100, '%')
    FROM patients;

-- We need a breakdown for the total amount of admissions each doctor has started each year. Show the doctor_id, doctor_full_name, specialty, year, total_admissions for that year.
    SELECT
        d.doctor.id,
        CONCAT(d.first_name, ' ', d.last_name) AS doctor_name,
        d.specialty,
        YEAR(a.admission_date) AS selected_year,
        COUNT(*) AS total_admissions
    FROM doctors d
    JOIN admissions a 
    ON a.attending_doctor_id = d.doctor_id
    GROUP BY d.doctor_id, selected_year;
---------------------------
    SELECT
        d.doctor_id,
        CONCAT(d.first_name, ' ', d.last_name) AS doctor_name,
        d.specialty,
        YEAR(a.admission_date) AS selected_year,
        COUNT(*) AS total_admissions
    FROM doctors d 
    LEFT JOIN admissions a
        ON d.doctor_id = a.attending_doctor_id
    GROUP BY
        doctor_name,
        selected_year
    ORDER BY doctor_id, selected_year;

