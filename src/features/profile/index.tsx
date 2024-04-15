export default function App() {
  return (
    <div className="w-full bg-[#333333]">
      <div className="flex flex-col w-full justify-center items-center space-x-2">
        <div>
          <img
            className="w-[70px] rounded-full "
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="User Profile"
          />
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
            Minh Thuận
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-3 text-xl ml-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#fff"
              className="w-[25px]"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </div>
          <div>
            <p>Bạn Bè</p>
          </div>
        </div>
        <div className="px-4">
          <button className="flex gap-3 text-xl justify-start items-center w-full bg-neutral-700 border-neutral-700 border-2 duration-200 ease-linear hover:border-neutral-500">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                fill="#fff"
                className="w-[25px]"
              >
                <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
              </svg>
            </div>
            <div className="text-lg">
              <p>4 Bạn Bè</p>
            </div>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <div className="items-center flex gap-3 text-xl ml-4">
          <div className="p-1 rounded-lg border-[3px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[20px]"
              viewBox="0 0 512 512"
              fill="#fff"
            >
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
            </svg>
          </div>
          <div>
            <p>Tiện Ích</p>
          </div>
        </div>
        <div className="px-4">
          <button className="w-[120px] h-[120px] border-neutral-600 border-4 rounded-3xl duration-200 ease-linear hover:border-neutral-500">
            <div className="flex flex-col justify-between gap-3 items-center w-full h-full">
              <div>
                <div className="w-full h-full border-[3px] bg-[rgba(223,191,0,0.1)] border-yellow-500 p-5 rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-[15px]"
                    fill="#ffda00"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                  </svg>
                </div>
              </div>
              <div className="bg-neutral-600 w-[100px] rounded-b-xl rounded-t-sm">
                <p>Create</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className=" text-white py-1 px-4 text-xl ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[30px] inline-block mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>
        Tổng quan
        <div className="bg-neutral-700 mt-2 rounded-lg  ">
          <div className="flex items-center justify-between w-full rounded-lg pr-3 border-neutral-700 border-2 duration-200 ease-linear hover:border-neutral-500 ">
            <div className="flex justify-center items-center pl-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-[25px]"
                  fill="#fff"
                >
                  <path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg py-1 px-4 ">Sửa ảnh hồ sơ</h1>
              </div>
            </div>
            <div>
              <svg
                className="w-[15px] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="#fff"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-[#363636]"></div>
          <div className="flex items-center justify-between rounded-lg w-full pr-3 border-neutral-700 border-2 duration-200 ease-linear hover:border-neutral-500">
            <div className="flex justify-center items-center pl-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[25px]"
                  fill="#fff"
                  viewBox="0 0 448 512"
                >
                  <path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg py-1 px-4 ">Sửa tên</h1>
              </div>
            </div>
            <div>
              <svg
                className="w-[15px] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="#fff"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-[#363636]"></div>
          <div className="flex items-center justify-between  w-full pr-3 rounded-lg border-neutral-700 border-2 duration-200 ease-linear hover:border-neutral-500">
            <div className="flex justify-center items-center pl-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[25px]"
                  fill="#fff"
                  viewBox="0 0 512 512"
                >
                  <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg py-1 px-4 ">Sửa ngày sinh</h1>
              </div>
            </div>
            <div>
              <svg
                className="w-[15px] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="#fff"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-[#363636]"></div>
          <div className="flex items-center justify-between  w-full pr-3 rounded-lg border-neutral-700 border-2 duration-200 ease-linear hover:border-neutral-500">
            <div className="flex justify-center items-center pl-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[25px]"
                  fill="#fff"
                  viewBox="0 0 512 512"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg py-1 px-4 ">Thay đổi địa chỉ email</h1>
              </div>
            </div>
            <div>
              <svg
                className="w-[15px] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="#fff"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-[#363636]"></div>
          <div className="flex items-center justify-between  w-full pr-3 rounded-lg border-neutral-700 border-2 duration-200 ease-linear hover:border-neutral-500">
            <div className="flex justify-center items-center pl-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[25px]"
                  fill="#fff"
                  viewBox="0 0 448 512"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg py-1 px-4 ">Cách thêm tiện ích</h1>
              </div>
            </div>
            <div>
              <svg
                className="w-[15px] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="#fff"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-[#363636]"></div>
          <div className="flex items-center justify-between  w-full pr-3 rounded-lg border-neutral-700 border-2 duration-200 ease-linear hover:border-neutral-500">
            <div className="flex justify-center items-center pl-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[25px]"
                  fill="#fff"
                  viewBox="0 0 512 512"
                >
                  <path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg py-1 px-4 ">Đã chặn</h1>
              </div>
            </div>
            <div>
              <svg
                className="w-[15px] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="#fff"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-[#363636]"></div>
          <div className="flex items-center justify-between  w-full pr-3 rounded-lg border-neutral-700 border-2 duration-200 ease-linear hover:border-neutral-500">
            <div className="flex justify-center items-center pl-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[25px]"
                  fill="#fff"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM228 104c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V312c0 11 9 20 20 20s20-9 20-20V298.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V104z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg py-1 px-4 ">Khôi phục đơn hàng</h1>
              </div>
            </div>
            <div>
              <svg
                className="w-[15px] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="#fff"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className=" text-white px-4 text-xl ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[25px] inline-block mr-2"
          fill="#fff"
          viewBox="0 0 512 512"
        >
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
        </svg>
        Giới thiệu
        <div className="bg-neutral-700 mt-2 rounded-lg ">
          <div className="flex items-center justify-between  w-full pr-3 rounded-lg border-neutral-700 border-2 duration-200 ease-linear hover:border-neutral-500">
            <div className="flex justify-center items-center pl-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[25px]"
                  fill="#fff"
                  viewBox="0 0 448 512"
                >
                  <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg py-1 px-4 ">Tiktok</h1>
              </div>
            </div>
            <div>
              <svg
                className="w-[15px] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="#fff"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-[#363636]"></div>
          <div className="flex items-center justify-between  w-full pr-3 rounded-lg border-neutral-700 border-2 duration-200 ease-linear hover:border-neutral-500">
            <div className="flex justify-center items-center pl-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[25px]"
                  fill="#fff"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg py-1 px-4 ">Instagram</h1>
              </div>
            </div>
            <div>
              <svg
                className="w-[15px] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="#fff"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-[#363636]"></div>
          <div className="flex items-center justify-between  w-full pr-3 rounded-lg border-neutral-700 border-2 duration-200 ease-linear hover:border-neutral-500">
            <div className="flex justify-center items-center pl-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[25px]"
                  fill="#fff"
                  viewBox="0 0 512 512"
                >
                  <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg py-1 px-4 ">Twitter</h1>
              </div>
            </div>
            <div>
              <svg
                className="w-[15px] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="#fff"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-[#363636]"></div>
          <div className="flex items-center justify-between  w-full pr-3 rounded-lg border-neutral-700 border-2 duration-200 ease-linear hover:border-neutral-500">
            <div className="flex justify-center items-center pl-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[25px]"
                  fill="#fff"
                  viewBox="0 0 512 512"
                >
                  <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg py-1 px-4 ">Chia sẻ locket</h1>
              </div>
            </div>
            <div>
              <svg
                className="w-[15px] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="#fff"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-[#363636]"></div>
          <div className="flex items-center justify-between  w-full pr-3 rounded-lg border-neutral-700 border-2 duration-200 ease-linear hover:border-neutral-500">
            <div className="flex justify-center items-center pl-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[25px]"
                  fill="#fff"
                  viewBox="0 0 576 512"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg py-1 px-4 ">Đánh giá locket</h1>
              </div>
            </div>
            <div>
              <svg
                className="w-[15px] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="#fff"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-[#363636]"></div>
          <div className="flex items-center justify-between  w-full pr-3 rounded-lg border-neutral-700 border-2 duration-200 ease-linear hover:border-neutral-500">
            <div className="flex justify-center items-center pl-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[25px]"
                  fill="#fff"
                  viewBox="0 0 512 512"
                >
                  <path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg py-1 px-4 ">Điều khoản dịch vụ</h1>
              </div>
            </div>
            <div>
              <svg
                className="w-[15px] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="#fff"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-[#363636]"></div>
          <div className="flex items-center justify-between  w-full pr-3 rounded-lg border-neutral-700 border-2 duration-200 ease-linear hover:border-neutral-500">
            <div className="flex justify-center items-center pl-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[25px]"
                  fill="#fff"
                  viewBox="0 0 448 512"
                >
                  <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg py-1 px-4 ">
                  Chính sách và quyền riêng tư
                </h1>
              </div>
            </div>
            <div>
              <svg
                className="w-[15px] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="#fff"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className=" text-white  py-1 px-4 text-xl ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[25px] inline-block mr-2"
          fill="#fff"
          viewBox="0 0 512 512"
        >
          <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
        </svg>
        Support
        <div className="bg-neutral-700 mt-2 rounded-lg ">
          <div className="flex items-center justify-between w-full pr-3 rounded-lg border-neutral-700 border-2 duration-200 ease-linear hover:border-neutral-500">
            <div className="flex justify-center items-center pl-2 ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[25px] "
                  fill="#fff"
                  viewBox="0 0 512 512"
                >
                  <path d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24V312h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V200c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg py-1 px-4 ">Report a problem</h1>
              </div>
            </div>
            <div>
              <svg
                className="w-[15px] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="#fff"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-[#363636]"></div>
          <div className="flex items-center justify-between  w-full pr-3 rounded-lg border-neutral-700 border-2 duration-200 ease-linear hover:border-neutral-500">
            <div className="flex justify-center items-center pl-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[25px]"
                  fill="#fff"
                  viewBox="0 0 512 512"
                >
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg py-1 px-4 ">Make a suggestion</h1>
              </div>
            </div>
            <div>
              <svg
                className="w-[15px] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="#fff"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-white  py-1 px-4 text-xl ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[25px] inline-block mr-2"
          fill="#fff"
          viewBox="0 0 512 512"
        >
          <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
        </svg>
        Vùng nguy hiểm
        <div className="bg-neutral-700 mt-2 rounded-lg ">
          <div className="flex items-center justify-between w-full pr-3 rounded-lg border-neutral-700 border-2 duration-200 ease-linear hover:border-neutral-500">
            <div className="flex justify-center items-center pl-2 ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[20px]"
                  fill="#fff"
                  viewBox="0 0 448 512"
                >
                  <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                </svg>
              </div>

              <div>
                <h1 className="text-lg py-1 px-4 ">Vùng nguy hiểm</h1>
              </div>
            </div>
            <div>
              <svg
                className="w-[15px] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="#fff"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </div>
          </div>
          <div className="w-full h-[1.5px] bg-[#363636]"></div>
          <div className="flex items-center justify-between  w-full pr-3 rounded-lg border-neutral-700 border-2 duration-200 ease-linear hover:border-neutral-500">
            <div className="flex justify-center items-center pl-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[25px]"
                  fill="#fff"
                  viewBox="0 0 512 512"
                >
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg py-1 px-4 ">Đăng xuất</h1>
              </div>
            </div>
            <div>
              <svg
                className="w-[15px] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="#fff"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
