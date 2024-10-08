/* eslint-disable @next/next/no-img-element */
import ConvertKitForm from './ConvertKitForm'

export default function Magnet() {
  return (
    <div className="my-8 flex flex-col items-center rounded-md border bg-gray-100 p-6 sm:flex-row sm:items-start">
      <img
        src="static/images/nestjs.png"
        alt="NestJS logo"
        className="mt-0 mb-4 h-20 sm:mr-6 sm:h-20"
      />
      <div>
        <span className="mb-1 inline-block text-xl font-bold dark:text-gray-800">
          Get Free NestJS Cheat Sheet
        </span>
        <span className="flex flex-col dark:text-gray-800">
          Get access to my free NestJS cheat sheet and learn tips and advanced techniques to improve
          your developer workflow and NestJS applications in production.
        </span>
        <ConvertKitForm />
      </div>
    </div>
  )
}
