import React from "react";

import * as S from "./style";

function Modal({ modalContent, setModalState }) {
  return (
    <S.ModalWrap onClick={() => setModalState(false)}>
      <S.ModalCard>
        <S.ModalContentWrap>
          <S.ModalContent>{modalContent}</S.ModalContent>
        </S.ModalContentWrap>
        <S.ModalCloseBtn type="button" onClick={() => setModalState(false)}>
          닫기
        </S.ModalCloseBtn>
      </S.ModalCard>
    </S.ModalWrap>
  );
}

export default Modal;
