import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { TextField, Select, MenuItem, FormHelperText } from '@mui/material';

interface IFormInput {
	firstName: string;
	lastName: string;
	iceCreamType: string;
}

const RHF = () => {
	const iceCreamOptions = ['chocolate', 'strawberry', 'vanilla'];

	const initialValues: IFormInput = {
		firstName: '',
		lastName: '',
		iceCreamType: iceCreamOptions[0],
	};

	const { control, register, handleSubmit } = useForm<IFormInput>({
		defaultValues: initialValues,
	});

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextField
				label="First Name"
				{...register('firstName', { required: true, maxLength: 20 })}
			/>{' '}
			<br />
			<br />
			<TextField
				label="Last Name"
				{...register('lastName', { pattern: /^[A-Za-z]+$/i })}
			/>
			<br />
			<br />
			<Controller
				name="iceCreamType"
				control={control}
				render={({ field }) => (
					<>
						<Select {...field} style={{ width: 200 }}>
							{iceCreamOptions.map((option, index) => (
								<MenuItem value={option} key={index}>
									{option}
								</MenuItem>
							))}
						</Select>
						<FormHelperText>Select ice-cream</FormHelperText>
					</>
				)}
			/>
			<br />
			<br />
			<input type="submit" /> <input type="reset" />
		</form>
	);
};

export default RHF;
