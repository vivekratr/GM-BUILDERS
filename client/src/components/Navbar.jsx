import React, { useState, useContext, useEffect } from 'react'
import PluralitySocialConnect from 'plurality-social-connect';
import { Context } from "../context/ContextProvider";

const Navbar = () => {
    const {
        handleProfileDataReturned,
        handleGetAllAccounts,
        handleGetConnectedAccount,
        handleMessageSignature,
        handleVerifyMessageSignature,
        handleGetBalance,
        handleSendTransaction,
        handleGetBlockNumber,
        handleGetTransactionCount,
        handleReadFromContract,
        handleWriteToContract,
        handleErrorMessage,
        renderData,
        childRef,
      } = useContext(Context);
  return (
    <div className=' bg-black flex items-center justify-between p-[1.125rem] min-h-[120px] w-full overflow-hidden'>

        <div className='relative left-5'>
            <img src="https://i.imgur.com/T0Ew5Bq.png" className=' object-cover h-[103px]' alt="" />
        </div>

        <div className=''>
            <ul className='flex items-end min-h-[120px] min-w-[500px] justify-between space-x-6'>
                <li>
                    <a href='#' className='text-[1.125rem] capitalize font-medium font-inter text-white text-left inline-block'>Home</a>
                </li>
                <li>
                    <a href='#' className='text-[1.125rem] capitalize font-medium font-inter text-white text-left inline-block'>Article</a>
                </li>
                <li>
                    <a href='#' className='text-[1.125rem] capitalize font-medium font-inter text-white text-left inline-block'>News</a>
                </li>
                <li>
                    <a href='#' className='text-[1.125rem] capitalize font-medium font-inter text-white text-left inline-block'>Communities</a>
                </li>
                <li>
                    <a href='#' className='text-[1.125rem] capitalize font-medium font-inter text-white text-left inline-block'>Write</a>
                </li>
            </ul>
        </div>

        <div>
        <PluralitySocialConnect
                options={{ apps: 'twitter' }}
                onProfileDataReturned={handleProfileDataReturned}
                onGetAllAccounts={handleGetAllAccounts}
                onGetConnectedAccount={handleGetConnectedAccount}
                onGetMessageSignature={handleMessageSignature}
                onVerifyMessageSignature={handleVerifyMessageSignature}
                onGetBalance={handleGetBalance}
                onSendTransaction={handleSendTransaction}
                onGetBlockNumber={handleGetBlockNumber}
                onGetTransactionCount={handleGetTransactionCount}
                onReadFromContract={handleReadFromContract}
                onWriteToContract={handleWriteToContract}
                onErrorMessage={handleErrorMessage}
                // all customization params are optional
                // customization={{ height: '200px', width: '500px', initialBackgroundColor: '#E8A123', initialTextColor: '#FFFFFF', flipBackgroundColor: '#12AE83', flipTextColor: '#FFFFFF'}}
                ref={childRef}
            />
        </div>
      
    </div>
  )
}

export default Navbar
