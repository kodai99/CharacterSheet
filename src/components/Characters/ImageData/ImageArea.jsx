import React, { useCallback } from 'react';
import { storage } from "../../../firebase/firebase";
import { CharacterImage } from "./Image";
import IconButton from '@material-ui/core/IconButton';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  iconButton: {
    height: 60,
    width: 60,
  },
  icon: {
    cursor: "pointer"
  }
});

export const CharacterImageArea = ({ image, setImage }) => {
  const classes = useStyles();

  const uploadCharacterImage = useCallback(async (e) => {
    const image = e.target.files;
    const blob = new Blob(image, { type: 'image/jpeg' });

    const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const N = 16;
    const imageName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n) => S[n % S.length]).join('');

    try {
      const uploadImage = storage.ref("image").child(imageName).put(blob);
      await uploadImage;
      const path = await uploadImage.snapshot.ref.getDownloadURL();
      const imageData = {
        id: imageName,
        path: path,
      };
      setImage(imageData);

    } catch (err) {
      alert("画像のアップロードに失敗しました。");
      console.log(err);
    }
  }, [setImage]);

  const deleteCharacterImage = useCallback(async (id) => {
    if (!id) {
      return;
    }

    const conf = window.confirm("この画像を削除しますか？");
    if (!conf) {
      return;
    }

    setImage("");
    try {
      await storage.ref("image").child(id).delete();

    } catch (err) {
      alert("画像の削除に失敗しました。");
      console.log(err);
    }
  }, [image]);

  return (
    <div className={classes.root}>
      <h2>【画像】</h2>
      <div className="md-margin"></div>
      <div>
        {image && (
          <CharacterImage key={image.id} path={image.path} />
        )}
      </div>
      <div className="md-margin"></div>
      <div>
        <span>画像を登録する</span>
        <IconButton color="primary" className={classes.iconButton}>
          <label className={classes.icon}>
            <AddToPhotosIcon />
            <input
              className="hidden" type="file"
              onChange={(e) => uploadCharacterImage(e)}
            />
          </label>
        </IconButton>
        <div className="sm-margin"></div>
        <span>画像を削除する</span>
        <IconButton color="secondary" className={classes.iconButton}>
          <label className={classes.icon}>
            <DeleteIcon />
            <input
              className="hidden" type="button"
              onClick={() => deleteCharacterImage(image.id)}
            />
          </label>
        </IconButton>
      </div>
    </div>
  );
};