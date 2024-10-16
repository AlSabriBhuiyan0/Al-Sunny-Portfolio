/**
 * Contributed by HarshArora-1205
 */

import React from 'react'

import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'

type Props = {
  message: string
  status: boolean
}

const Toast = ({ message, status }: Props) => {
  return (
    <div
      className={`mt-4 flex w-[90%] flex-col gap-3 p-4 md:w-full ${
        status
          ? ' border-l-4 border-l-green-400 bg-green-100'
          : 'border-l-4 border-l-red-400 bg-red-100'
      }`}
    >
      {status ? (
        <CheckCircleIcon className="h-8 w-8 text-green-400" />
      ) : (
        <XCircleIcon className="h-8 w-8 text-red-400" />
      )}
      <p className="text-black">{message}</p>
    </div>
  )
}

export default Toast
