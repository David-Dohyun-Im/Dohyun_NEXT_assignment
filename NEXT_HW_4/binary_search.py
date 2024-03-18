max = int(input('최대 숫자를 입력하세요: '))
min = 0
trials = 1

print(f'1부터 {max}까지의 숫자를 생각하세요\n')
input('준비가 되었다면 Enter키를 누르세요')

while(True):
    mid = (max + min)//2
    print(f'생각한 숫자가 {mid}인가요?')
    feedback = input("맞으면 '맞음', 생각한 숫자가 더 크면 '큼', 생각한 숫자가 더 작으면 '작음'이라고 입력하세요: ")
    if feedback == '맞음':
        print(f'축하드립니다! {trials}번만에 맞췄습니다.')
        break
    elif feedback == '큼':
        min = mid
        trials +=1
    elif feedback == '작음':
        max = mid
        trials +=1
    else: print('형식에 맞추어 다시 입력해주세요')
    