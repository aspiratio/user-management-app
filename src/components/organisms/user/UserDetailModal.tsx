import { memo, VFC } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { User } from "../../../types/api/user";

type Props = {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, onClose } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          {/* FormControlがStackより内側にあるとspacingが効かない（理由不明） */}
          <FormControl>
            <Stack spacing={2}>
              <FormLabel>名前</FormLabel>
              <Input value={user?.username} isReadOnly />
              <FormLabel>フルネーム</FormLabel>
              <Input value={user?.name} isReadOnly />
              <FormLabel>MAIL</FormLabel>
              <Input value={user?.email} isReadOnly />
              <FormLabel>TEL</FormLabel>
              <Input value={user?.phone} isReadOnly />
            </Stack>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
