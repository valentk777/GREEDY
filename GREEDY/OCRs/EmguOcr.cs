﻿using System.Drawing;
using Emgu.CV;
using Emgu.CV.OCR;
using Emgu.CV.Structure;
using GREEDY.Extensions;
using System.Collections.Generic;

namespace GREEDY.OCRs
{
    public class EmguOcr : IOcr
    {
        private readonly Emgu.CV.OCR.Tesseract _tesseract;

        public EmguOcr()
        {
            _tesseract = new Emgu.CV.OCR.Tesseract
            (
                Environments.AppConfig.TesseractDataPath,
                Environments.AppConfig.OcrLanguage,
                OcrEngineMode.Default);
        }

        public List<string> ConvertImage(Bitmap image)
        {
            _tesseract.SetImage(new Image<Bgr, byte>(image));
            _tesseract.Recognize();
            return _tesseract.GetLinesOfText();
        }
    }
}