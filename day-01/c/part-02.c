#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>

#define LINE_COUNT 1000
#define FILE_PATH "../data/sample.txt"

FILE *open_file(const char *path, const char *mode) {
  FILE *file = fopen(path, mode);
  if (file == NULL) {
    perror("Error opening file");
    exit(EXIT_FAILURE);
  }
  return file;
}

int read_value_from_line(const char *line) {
  int length = strlen(line);
  char solution[2];

  printf("%s", line);

  for (int i = 0; i < length; i++) {
    if (isdigit(line[i])) {
      solution[0] = line[i];
      break;
    }

    solution[0] = '\0';
  }

  for (int i = length - 1; i >= 0; i--) {
    if (isdigit(line[i])) {
      solution[1] = line[i];
      break;
    }

    solution[1] = '\0';
  }

  printf("%s\n", solution);

  return atoi(solution);
}

int main() {
  FILE *file = open_file(FILE_PATH, "r");

  char line[LINE_COUNT];
  int calibration = 0;

  while (fgets(line, sizeof(line), file)) {
    int value = read_value_from_line(line);
    calibration += value;
  }

  fclose(file);

  printf("Calibration: %d\n", calibration);

  return 0;
}
