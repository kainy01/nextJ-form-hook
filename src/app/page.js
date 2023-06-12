 "use client";
 import { useForm } from 'react-hook-form';

export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-10 rounded shadow ">
        <h2 className="text-2xl font-bold mb-4">Registration Form</h2>

        <label htmlFor="firstName" className="block mb-2">
          First Name
        </label>
        <input
          {...register('firstName', { required: true })}
          id="firstName"
          aria-invalid={errors.firstName ? 'true' : 'false'}
          className="border border-gray-300 p-2  rounded w-full"
        />
        {errors.firstName?.type === 'required' && (
          <p role="alert" className="text-red-500 mb-4">
            First name is required
          </p>
        )}

        <label htmlFor="mail" className="block mb-2">
          Email Address
        </label>
        <input
          {...register('mail', { required: 'Email Address is required' })}
          id="mail"
          aria-invalid={errors.mail ? 'true' : 'false'}
          className="border border-gray-300 p-2  rounded w-full"
        />
        {errors.mail && (
          <p role="alert" className="text-red-500 mb-4">
            {errors.mail?.message}
          </p>
        )}

        <div className="flex items-center ">
          <input
            type="checkbox"
            {...register('acceptTerms', { required: true })}
            id="acceptTerms"
            className="mr-2"
          />
          <label htmlFor="acceptTerms" className="text-gray-700">
            I accept the terms and conditions
          </label>
        </div>
        {errors.acceptTerms && (
          <p role="alert" className="text-red-500 mb-4">
            You must accept the terms and conditions
          </p>
        )}

        <input type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" />
      </form>
    
    </div>
  );
}
