import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// const loadingWordAnime = {
//   base: {
//     y: 0,
//   },
//   loading: {
//     y: -10,
//     transition: {
//       repeat: Infinity,
//       repeatType: "reverse",
//       duration: 1,
//       ease: "easeInOut",
//     },
//   },
// };

function Loading() {
  const [showModal, setShowModal] = useState(true);
  useEffect(() => {
    setTimeout(() => setShowModal(false), 2000);
  }, [setShowModal]);
  return (
    <AnimatePresence>
      {showModal && (
        <div className="w-[100svw] h-[100svh] flex flex-col justify-center items-center">
          <motion.svg
            className="mb-10"
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            animate={{ rotate: 360, opacity: 1 }}
            transition={{
              type: "spring",
              mass: 5,
              stiffness: 50,
              damping: 30,
              repeat: Infinity,
            }}
            exit={{
              scale: 8,
              rotate: 720,
              opacity: 0,
            }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M191.079 74.5457C190.982 74.9055 190.961 75.2679 191.004 75.6164L112.076 94.7165C107.992 95.7048 104.303 92.0244 105.294 87.9479L124.043 10.7799C125.499 11.0992 126.962 10.2216 127.35 8.77023C127.751 7.27663 126.861 5.74041 125.364 5.33928C123.867 4.93815 122.329 5.82391 121.929 7.31751C121.54 8.76885 122.368 10.2604 123.789 10.7118L101.441 86.9156C100.26 90.941 95.2259 92.2842 92.1827 89.386L33.3794 33.3816C33.592 33.1017 33.7544 32.7765 33.8508 32.4166C34.251 30.923 33.3617 29.3868 31.8647 28.9857C30.3676 28.5845 28.8294 29.4703 28.4292 30.9639C28.0289 32.4575 28.9182 33.9937 30.4153 34.3949C31.4874 34.6821 32.5803 34.3097 33.2619 33.5263L89.3647 92.1992C92.2686 95.2363 90.9223 100.26 86.889 101.439L8.96629 124.199C8.76769 123.18 8.00744 122.311 6.93529 122.023C5.43825 121.622 3.89999 122.508 3.49978 124.002C3.09957 125.495 3.98887 127.031 5.48591 127.433C6.98295 127.834 8.52122 126.948 8.92143 125.454C9.01785 125.094 9.03988 124.732 8.9957 124.383L87.9228 105.284C92.0076 104.295 95.6958 107.976 94.7056 112.053L75.9573 189.22C74.5015 188.901 73.0385 189.778 72.6496 191.23C72.2494 192.723 73.1387 194.26 74.6357 194.661C76.1328 195.062 77.6711 194.176 78.0713 192.683C78.4601 191.231 77.6319 189.74 76.2115 189.288L98.5581 113.085C99.7389 109.059 104.773 107.716 107.817 110.615L166.62 166.619C166.408 166.899 166.246 167.224 166.149 167.583C165.749 169.077 166.638 170.613 168.135 171.014C169.632 171.415 171.171 170.53 171.571 169.036C171.971 167.543 171.082 166.006 169.585 165.605C168.513 165.318 167.419 165.691 166.738 166.474L110.635 107.802C107.731 104.764 109.077 99.74 113.111 98.5619L191.034 75.8005C191.232 76.8196 191.993 77.6894 193.065 77.9766C194.562 78.3778 196.1 77.492 196.5 75.9984C196.9 74.5048 196.011 72.9686 194.514 72.5675C193.017 72.1663 191.479 73.0521 191.079 74.5457Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M191.07 75.7908C191.099 75.9393 191.14 76.0846 191.192 76.2254C191.201 76.249 191.21 76.2725 191.219 76.2958C191.387 76.7167 191.656 77.0943 192.005 77.3918C192.313 77.6552 192.684 77.8558 193.102 77.9678C194.6 78.3691 196.138 77.4829 196.539 75.9887C196.939 74.4945 196.05 72.9577 194.552 72.5564C193.401 72.2481 192.226 72.6997 191.562 73.6031C191.362 73.8756 191.208 74.1892 191.115 74.5354C191.019 74.8954 190.997 75.2579 191.041 75.6066L112.081 94.7143C107.995 95.703 104.305 92.0211 105.296 87.943L124.052 10.7441C124.695 10.8851 125.339 10.7929 125.892 10.5211C126.591 10.177 127.144 9.54493 127.361 8.73369C127.762 7.23949 126.872 5.70266 125.374 5.30136C123.877 4.90007 122.338 5.78619 121.938 7.28038C121.72 8.09163 121.883 8.91543 122.317 9.56326C122.659 10.0749 123.171 10.4768 123.798 10.676L101.442 86.9104C100.26 90.9374 95.224 92.2811 92.1796 89.3817L33.3529 33.3549C33.5656 33.0749 33.728 32.7496 33.8245 32.3896C33.9172 32.0437 33.9407 31.6955 33.9036 31.3596C33.7803 30.2447 32.9885 29.2656 31.8375 28.9572C30.3399 28.556 28.801 29.4421 28.4007 30.9363C28.0003 32.4305 28.8899 33.9673 30.3876 34.3686C30.8055 34.4806 31.2266 34.4924 31.6252 34.4187C32.0765 34.3353 32.4991 34.1423 32.8559 33.8611C32.8754 33.8457 32.8948 33.83 32.9139 33.8141C33.0288 33.7185 33.1364 33.6134 33.2353 33.4997L89.3605 92.196C92.2655 95.2343 90.9187 100.261 86.8838 101.439L8.93 124.209C8.90117 124.061 8.86053 123.916 8.80882 123.776C8.8002 123.752 8.79128 123.729 8.78206 123.706C8.61368 123.284 8.34419 122.906 7.99504 122.608C7.68665 122.344 7.3161 122.144 6.89819 122.032C5.40055 121.631 3.86167 122.517 3.4613 124.011C3.06093 125.505 3.95059 127.042 5.44822 127.444C6.59916 127.752 7.77446 127.3 8.43865 126.396C8.63873 126.124 8.79243 125.81 8.88511 125.465C8.98158 125.105 9.00361 124.742 8.95942 124.393L87.918 105.286C92.0044 104.297 95.6941 107.979 94.7036 112.057L75.9478 189.256C75.3051 189.115 74.661 189.207 74.1085 189.479C73.4089 189.823 72.8561 190.455 72.6387 191.266C72.2383 192.76 73.128 194.297 74.6256 194.699C76.1233 195.1 77.6621 194.214 78.0625 192.72C78.2799 191.908 78.1171 191.085 77.6833 190.437C77.3407 189.925 76.829 189.523 76.202 189.324L98.5576 113.09C99.7388 109.063 104.775 107.719 107.82 110.619L166.647 166.646C166.435 166.926 166.272 167.25 166.176 167.61C166.083 167.957 166.059 168.305 166.097 168.641C166.22 169.756 167.012 170.734 168.163 171.043C169.66 171.444 171.199 170.558 171.599 169.064C172 167.569 171.11 166.033 169.613 165.631C169.194 165.519 168.773 165.508 168.374 165.582C167.924 165.665 167.502 165.857 167.146 166.138C167.126 166.153 167.106 166.169 167.087 166.185C166.972 166.281 166.864 166.387 166.765 166.501L110.639 107.805C107.734 104.766 109.081 99.7399 113.116 98.5613L191.07 75.7908ZM167.036 163.946L112.06 106.452C110.172 104.477 111.047 101.21 113.67 100.444L190.028 78.1393C190.645 78.9526 191.529 79.5762 192.594 79.8617C195.14 80.544 197.756 79.0376 198.437 76.4974C199.118 73.9572 197.605 71.3447 195.059 70.6624C192.513 69.9802 189.897 71.4866 189.217 74.0268C189.216 74.0278 189.216 74.0288 189.216 74.0298L111.616 92.8084C108.96 93.4511 106.562 91.0577 107.205 88.4071L125.606 12.6754C127.321 12.3261 128.777 11.0443 129.26 9.24235C129.94 6.70214 128.428 4.08961 125.882 3.40739C123.336 2.72518 120.72 4.23152 120.039 6.77173C119.556 8.57367 120.177 10.4118 121.487 11.5719L99.5558 86.3575C98.788 88.9747 95.5144 89.8484 93.5353 87.9637L35.7218 32.9019C35.7221 32.9007 35.7225 32.8995 35.7228 32.8982C36.4034 30.358 34.8911 27.7455 32.345 27.0633C29.799 26.3811 27.183 27.8874 26.5023 30.4276C25.8217 32.9678 27.334 35.5804 29.8801 36.2626C30.9458 36.5481 32.0224 36.45 32.9638 36.0547L87.9396 93.549C87.9396 93.549 87.9396 93.549 87.9396 93.549C89.8278 95.5239 88.9524 98.791 86.3297 99.5571L9.97236 121.86C9.35466 121.047 8.47141 120.424 7.40568 120.138C4.85962 119.456 2.24361 120.962 1.56297 123.503C0.88232 126.043 2.39468 128.655 4.94074 129.338C7.4868 130.02 10.1028 128.513 10.7834 125.973C10.7838 125.972 10.7841 125.971 10.7844 125.97L88.3831 107.192C91.039 106.549 93.4377 108.942 92.7938 111.593L74.3945 187.325C72.6793 187.674 71.2232 188.956 70.7404 190.758C70.0597 193.298 71.5721 195.91 74.1181 196.593C76.6642 197.275 79.2802 195.768 79.9608 193.228C80.4437 191.426 79.8235 189.588 78.5128 188.428L100.443 113.643C101.211 111.025 104.485 110.152 106.464 112.037L164.278 167.099C164.278 167.1 164.278 167.101 164.277 167.102C163.597 169.642 165.109 172.254 167.655 172.937C170.201 173.619 172.817 172.113 173.498 169.572C174.178 167.032 172.666 164.42 170.12 163.737C169.054 163.452 167.977 163.55 167.036 163.946Z"
              fill="white"
            />
          </motion.svg>
          <p className="text-heading01 tracking-widest">
            {["L", "o", "a", "d", "i", "n", "g", ".", ".", "."].map(
              (item, index) => (
                <motion.span
                  key={`loading-${item}`}
                  className="inline-block"
                  initial={{ y: 0 }}
                  animate={{
                    y: -20,
                    transition: {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 0.8,
                      delay: index * 0.1,
                    },
                  }}
                  exit={{ opacity: 0 }}
                >
                  {item}
                </motion.span>
              )
            )}
          </p>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Loading;
