import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { pwaAction } from "@/store/pwa/slice";
import style from "./installer.module.css";
import Image from "next/image";
const AppInstaller = () => {
  const dispatch = useAppDispatch();
  const { showInstallbanner } = useAppSelector((state) => state.pwa);
  const defferPrompt = useRef<any>(null);
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      defferPrompt.current = event;
      dispatch(pwaAction.setShowInstallBanner(true));
    });
  }, [dispatch]);
  const handleInstaller = function () {
    const installer = defferPrompt.current;
    if (installer) {
      installer.prompt();
    }
  };
  const handleClose = function () {
    dispatch(pwaAction.setShowInstallBanner(false));
  };
  return (
    <>
      {showInstallbanner && (
        <div className={style.installer}>
          <div className={style.inner}>
            <div className="flex justify-center items-center gap-1">
              <button className={style.close} onClick={handleClose}>
                <Image
                  src={"/icon/close.png"}
                  alt="close"
                  height={100}
                  width={100}
                />
              </button>
              <div className={style.logo} onClick={handleInstaller}>
                <Image
                  src={"/image/logo-light.png"}
                  alt="logo"
                  height={100}
                  width={100}
                />
                <span>Banimode Web App</span>
              </div>
            </div>
            <button className={style.btn} onClick={handleInstaller}>
              <span>نصب</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AppInstaller;
