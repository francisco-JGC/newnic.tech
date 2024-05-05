export const EmailTemplate = ({ username, email, service, message }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-8">
      <h1 className="text-2xl font-bold mb-4">Hola, NewNic</h1>
      <p className="text-base mb-4">
        El usuario <strong>{username}</strong> con el correo{' '}
        <strong>{email}</strong> ha solicitado el servicio de{' '}
        <strong>{service}</strong>.
      </p>
      <p className="text-base mb-4">Este es el mensaje:</p>
      <p className="text-base mb-8">{message}</p>
      <p className="text-base">Saludos,</p>
    </div>
  )
}
